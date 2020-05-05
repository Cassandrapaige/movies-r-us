import React, { useState, useEffect, createRef, Component } from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios';

import {API_KEY} from '../../base'

import './header.styles.scss'

const useKeyPress = target => {
    const [keyPressed, setKeyPressed] = useState(false);
  
    const downHandler = ({ key }) => {
      if (key === target) {
        setKeyPressed(true);
      }
    }
  
    const upHandler = ({ key }) => {
      if (key === target) {
        setKeyPressed(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("keydown", downHandler);
      window.addEventListener("keyup", upHandler);
  
      return () => {
        window.removeEventListener("keydown", downHandler);
        window.removeEventListener("keyup", upHandler);
      };
    });
  
    return keyPressed;
  };

  const scrollIntoView = target => {
    let rect = target.getBoundingClientRect();
    if (rect.bottom > window.innerHeight) {
        target.scrollIntoView(false);
    }
    if (rect.top < 0) {
        target.scrollIntoView();
    } 
}

const Header = ({history}) => {
    const [autoSuggestions, setAutoSuggestions] = useState(false)
    const [movieSuggestions, setMovieSuggestions] = useState('')
    const [userInput, setUserInput] = useState('')
    const [data, setData] = useState([])
    const [selected, setSelected] = useState(null);
    const downPress = useKeyPress("ArrowDown");
    const upPress = useKeyPress("ArrowUp");
    const enterPress = useKeyPress("Enter");
    const [cursor, setCursor] = useState(0);
    const [inView, setInView] = useState(false)
    const textInput = createRef()

    const searchComponentScroll = () => {
        let searchComponent = document.querySelector('.main-header');   
        let searchComponentInView = searchComponent.getBoundingClientRect() 
        if(searchComponentInView.bottom < window.innerHeight / 2) {
            setInView(true)
        } else {
            setInView(false)  
        }
    }

    useEffect(() => {
        textInput.current.focus()
    })
    useEffect(() => {
        window.addEventListener('scroll', searchComponentScroll)
        return () => window.removeEventListener('scroll', searchComponentScroll)
    },[])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
          .then(result => {
            setData(result.data.results[0])
          },(error => console.log(error)))        
      }, [])

    useEffect(() => {
      if (movieSuggestions.length && downPress) {
        setCursor(prevState =>
          prevState < movieSuggestions.length - 1 ? prevState + 1 : prevState
        );
      }
    }, [downPress]);

    useEffect(() => {
      if (movieSuggestions.length && upPress) {
        setCursor(prevState => (prevState > 0 ? prevState - 1 : prevState));
      }
    }, [upPress]);

    useEffect(() => {
      if (movieSuggestions.length && enterPress) {
        setSelected(movieSuggestions[cursor]);
      }
    }, [cursor, enterPress]);

    const getUserInput = event => setUserInput(event.target.value)

    const joinQuery = query => query.replace(/-/g,'&').split(' ').join('&').toLowerCase();

    const handleSubmit = event => {
        event.preventDefault()
        if(selected !== null) {
            history.push({
                pathname: '/search',
                search: joinQuery(selected.title)
            })
        }
        else {
            history.push({
                pathname: '/search',
                search: joinQuery(userInput)
            })
        }
        setUserInput('')
        window.scrollTo(0, 0);
    }

    const getMovieDetails = () => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${userInput}`)
        .then(result => {
            if(result.data.results.length === 0) {
                setAutoSuggestions(false)
            }
            else {
                const fetchedSuggestions = result.data.results.slice(0, 10)
                setMovieSuggestions(fetchedSuggestions)
                setAutoSuggestions(true)
            }
        },(error => console.log(error)))
    }

    return (
        <header className = 'main-header' style= {{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.backdrop_path})`}}>
            <div className = 'header-content'>
                <h1 className='header-title'>Where <span className= 'slogan'>Movies</span> Are A Big Deal</h1>
                <p>Browse through hundreds of movies or search for your favourites to find ones that are similar</p>
                <form className = {`header-search ${inView && 'fixed-search-bar'}`} onSubmit = {handleSubmit}>
                        <input 
                            ref = {textInput}
                            type="text" 
                            value = {userInput}
                            placeholder='&#xF002; Search movie' 
                            onChange = {event => {
                                getUserInput(event)
                                getMovieDetails()
                            }}
                            />  

                    <div className='search-query-results'>
                    {
                        autoSuggestions && userInput !== '' &&
                        <ul>
                            {movieSuggestions.map((suggestion, i) => (
                        <li 
                            className={`auto-suggestion ${i === cursor && 'active'}`}
                            key = {suggestion.id} 
                            onClick = {event => {
                                    setSelected(suggestion)
                                    history.push({
                                        pathname: '/search',
                                        search: joinQuery(event.target.textContent)
                                    })
                                }}>
                                {suggestion.title}
                        </li>
                        ))}
                    </ul>
                    }
                </div>       
            </form>
            </div>
        </header>
    )
}

export default withRouter(Header);
