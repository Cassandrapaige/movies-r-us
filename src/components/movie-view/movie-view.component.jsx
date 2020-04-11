import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink, withRouter } from 'react-router-dom'

/* MOVIEDB API KEY*/
import {API_KEY} from '../../base'

/* COMPONENTS */
import Pagination from '../pagination/pagination.component'
import MovieList from '../movie-list/movie-list.component'
import Spinner from '../spinner/spinner.component'

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

    return (

        <div className = 'movie-list-container'>
            {total !== 0 ?
            <div className='movie-list'>
                <h2 className = 'list-title'>{title}</h2>
                {isLoading ? <Spinner />
                 : <MovieList movies={movies} />} </div>
                : 
                <div className = 'err'>
                    <h3 className ='errorMsg'>{error}</h3>
                    <button onClick = {goBack} className = 'back-btn'> <i class="fas fa-arrow-left"></i> Go back </button>       
                </div>}  
        
            { total > 20 ? 
            <Pagination pages= {numPages} next={next} current = {current} /> : '' }  
        </div> 
    )
}         
    

export default withRouter(MovieView);
