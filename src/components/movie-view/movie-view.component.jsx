import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink, withRouter } from 'react-router-dom'

import {API_KEY} from '../../base'

import Pagination from '../pagination/pagination.component'
import Spinner from '../spinner/spinner.component'
import ErrorMessage from '../error-message/error-message.component'
import BackButton from '../back-button/back-button.component'
import Video from '../video/video.component'
import MovieOverview from '../movie-overview-container/movie-overview-container.component'

import './movie-view.styles.scss'

const MovieView = ({history, url, title, error, num = 120, fetchVideo, ...props}) => {
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
            window.scrollTo(0, 0);
            setTimeout(() => {
              setIsLoading(false)
            }, 1000)
        },(error => console.log(error)))
    },[current, url])

    const next = pageNum => setCurrent(pageNum)

    const numPages = Math.floor(total / 20)

    return (
        <div className = 'movie-view-container'>
            { total !== 0 ?   

            <section className="movie-list-container">
                <div className="movie-view-header">
                    <h1 className = 'list-title'>{title}</h1>
                    <p>Click on an image to read more or see movies that are similar</p>
                </div>
            {isLoading ? <Spinner /> :
            movies.map(movie => 
                <MovieOverview movie = {movie} {...props}/>
            )}
            </section>             
            : 
            <ErrorMessage error = {error}> 
                <BackButton />
            </ErrorMessage>
            }  
            { total > 20 ? 
            <Pagination pages= {numPages} next={next} current = {current} /> : '' }  
        </div> 
    )
}         
    
export default withRouter(MovieView);