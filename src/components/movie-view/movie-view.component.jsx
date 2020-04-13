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

const MovieView = ({history, url, title, error, num = 100}) => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [current, setCurrent] = useState(1)
    const [total, setTotal] = useState()

    useEffect(() => {
        setIsLoading(true)
        axios.get(`${url}&page=${current}`)
        .then(result => {
            setMovies(result.data.results)
            setTotal(result.data.total_results)
            console.log(result.data)
            setIsLoading(false)
        },(error) => console.log(error))
    },[current, url])

    const next = pageNum => {
        setTimeout(() => {
            window.scrollTo(0, num)
        }, 500)
        setCurrent(pageNum)
    }
    
    const goBack = () => history.goBack()

    const numPages = Math.floor(total / 20)

    const handleClick = (type, event) => {
        console.log(type)
        console.log(event.target.dataset.type)
    }
    
    return (

        <div className = 'movie-list-container'>
            <FilterMenu handleClick = {handleClick}>
                <h2 className = 'list-title'>{title}</h2>
            </FilterMenu>
            { total !== 0 ?

            <div className='movie-list'>   
                {isLoading ? <Spinner /> : <MovieList movies={movies} />} 
            </div>
                
            : <ErrorMessage error = {error} goBack={goBack} />}  
        
            { total > 20 ? 
            <Pagination pages= {numPages} next={next} current = {current} /> : '' }  
        </div> 
    )
}         
    

export default withRouter(MovieView);
