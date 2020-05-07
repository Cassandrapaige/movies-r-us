import React, {useState, useEffect, createRef } from 'react'
import {withRouter, NavLink} from 'react-router-dom'
import axios from 'axios';

import {API_KEY} from '../../base'

import './search-bar.styles.scss'

const Search = ({history, stickySearch}) => {
    const [movieSuggestions, setMovieSuggestions] = useState([])
    const [userInput, setUserInput] = useState('')
    const [selected, setSelected] = useState(null);
    const [cursor, setCursor] = useState(0);

    const textInput = createRef()
    useEffect(() => textInput.current.focus(), [])

    const getUserInput = event => setUserInput(event.target.value)

    const joinQuery = query => query.replace(/-/g,'&').split(' ').join('&').toLowerCase();

    /* --------------------------------------------------------

    --HANDLE SUBMIT-- 
    Need to handle submit for both user input and list selection
    
    --------------------------------------------------------*/

    const [inView, setInView] = useState(false)

    const searchComponentScroll = (elem) => {
        if(stickySearch) {
            let searchComponent = document.querySelector(elem);   
            let searchComponentInView = searchComponent.getBoundingClientRect() 
            
            searchComponentInView.bottom < window.innerHeight / 2 ?
                setInView(true)
                : setInView(false)  
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',searchComponentScroll('.main-header'))
        return () => window.removeEventListener('scroll', searchComponentScroll('.main-header'))
    },[])
    
    /* --------------------------------------------------------

    --HANDLE SUBMIT AND ON CLICK SELECTION-- 
    Need to handle submit for both user input and list selection on keypress
    The eventHandler further below will handle the routing, however it will
    relocate to the input text content, rather than the selected 
    suggestion --> must select value and push to hisotry
    
    --------------------------------------------------------*/

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

    const handleSelected = (event, target) => {
        setSelected(target)
        history.push({
            pathname: '/search',
            search: joinQuery(event.target.textContent)
        })
    }

    /* --------------------------------------------------------

    --FETCH SUGGESTIONS BASED ON USER INPUT-- 
    
    --------------------------------------------------------*/

    const getMovieSuggestions = () => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${userInput}`)
        .then(result => 
            setMovieSuggestions(result.data.results.slice(0, 10))
        ,(error => console.log(error)))
    }

    /* --------------------------------------------------------

    --KEYPRESS EVENTS-- 
    Handle keypress events for navigating list of dropdown suggestions 
    --> up, down and enter (*see above for capturing value of selected item)
    Use seperate useEffect hooks to avoid mutiple events being triggered at the same time
    * Cursor position is tracked by index (*see list item in html)
    --------------------------------------------------------*/

    const useKeyPress = target => {
        const [keyPressed, setKeyPressed] = useState(false)
      
        const downHandler = ({ key }) => 
            key === target && setKeyPressed(true) 
        
        const upHandler = ({ key }) => 
            key === target && setKeyPressed(false)
    
        useEffect(() => {
            window.addEventListener('keydown', downHandler)
            window.addEventListener('keyup', upHandler)
      
          return () => {
            window.removeEventListener('keydown', downHandler)
            window.removeEventListener('keyup', upHandler)
          }
        })
        return keyPressed;
      }

    const downPress = useKeyPress('ArrowDown')

    useEffect(() => {
        movieSuggestions.length && downPress &&
            setCursor(prevState =>
                prevState < movieSuggestions.length - 1 ? prevState + 1 : prevState
      )
    }, [downPress])

    const upPress = useKeyPress('ArrowUp')

    useEffect(() => {
        movieSuggestions.length && upPress &&
            setCursor(prevState => prevState > 0 ? prevState - 1 : prevState)
    }, [upPress])

    const enterPress = useKeyPress('Enter')

    useEffect(() => {
        movieSuggestions.length && enterPress &&
            setSelected(movieSuggestions[cursor])
    }, [cursor, enterPress])

    return (
        <form className = {`header-search ${inView && 'fixed-search-bar'}`} onSubmit = {handleSubmit}>
            <input 
                ref = {textInput}
                type="text" 
                value = {userInput}
                placeholder='&#xF002; Search movie' 
                onChange = {event => {
                    getUserInput(event)
                    getMovieSuggestions()
                }}/>  

            <div className='search-query-results'>
                {userInput !== '' &&
                    <ul>
                        {movieSuggestions.map((suggestion, i) => (
                        <li className={`auto-suggestion ${i === cursor && 'active'}`}
                            key = {suggestion.id} 
                            onClick = {e => handleSelected(e, suggestion)}>
                                {suggestion.title}
                        </li>
                        ))}
                    </ul>
                    }
                </div>       
        </form>
    ) 
}

export default withRouter(Search)