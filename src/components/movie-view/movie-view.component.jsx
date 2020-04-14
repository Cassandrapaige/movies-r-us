import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink, withRouter } from 'react-router-dom'

/* MOVIEDB API KEY*/
import {API_KEY} from '../../base'

/* COMPONENTS */
import Pagination from '../pagination/pagination.component'
import MovieList from '../movie-list/movie-list.component'
import Spinner from '../spinner/spinner.component'
import ErrorMessage from '../error-message/error-message.component'
import FilterMenu from '../filter-menu/filter-menu.component'

import './movie-view.styles.scss'

const MovieView = ({history, url, title, error, num = 330}) => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [current, setCurrent] = useState(1)
    const [total, setTotal] = useState() 
    const [isOpen, setIsOpen] = useState(false)
    const [listTitle, setListTitle] = useState('Rating Descending')
    const [video, setVideo] = useState(null)
    const [id, setId] = useState(454626)
    // const filteredMovies = data => data.filter(e => e.genre_ids.includes(35))

    useEffect(() => {
        setIsLoading(true)
        axios.get(`${url}&page=${current}`)
        .then(result => {
            setMovies(result.data.results)
            setTotal(result.data.total_results)
            setTimeout(() => {
                setIsLoading(false)
                window.scrollTo(0, num)
            }, 500)
        })
         axios.get('https://api.themoviedb.org/3/movie/' + id + '/videos?api_key=70dcc58955640e84f5c3ea8e6d2b9ade&language=en-US')
        .then(result => {
            if(result.data.results[0].key.length) {
                setVideo(result.data.results[0].key)
            }
        },(error => console.log(error)))
    },[url, current])

    const next = pageNum => {
        setCurrent(pageNum)
    }

    const goBack = () => history.goBack()

    const numPages = Math.floor(total / 20)

    const handleSort = (type, maths, event) => {
        if(maths === 'ascending') {
            setMovies(movies.sort((a, b) => (a[type] > b[type]) - (a[type] < b[type])))
        }
        else if(maths === 'descending') {
            setMovies(movies.sort((a, b) => (a[type] < b[type]) - (a[type] > b[type])))
        } 
        setIsOpen(!isOpen)       
        setListTitle(event.target.textContent)
        setTimeout(() => {
            window.scrollTo(0, num)
        }, 50)
    }

    const handleMouseEnter = type => {
        // axios.get('https://api.themoviedb.org/3/movie/' + type + '/videos?api_key=70dcc58955640e84f5c3ea8e6d2b9ade&language=en-US')
        // .then(result => {
        //     if(result.data.results[0].key.length) {
        //         setVideo(result.data.results[0].key)
        //     }
        // },(error => console.log(error)))
    }
    
    return (

        <div className = 'movie-list-container'>
            <FilterMenu 
                handleClick = {handleSort} 
                setIsOpen = {setIsOpen} 
                isOpen = {isOpen} 
                video = {video}
                title = {listTitle}>
                <h2 className = 'list-title'>{title}</h2>
            </FilterMenu>
            { total !== 0 ?

            <div className='movie-list'>   
                {isLoading ? <Spinner /> : <MovieList movies={movies} handleMouseEnter = {handleMouseEnter} />} 
            </div>
                
            : <ErrorMessage error = {error} goBack={goBack} />}  
        
            { total > 20 ? 
            <Pagination pages= {numPages} next={next} current = {current} /> : '' }  
        </div> 
    )
}         
    

export default withRouter(MovieView);
