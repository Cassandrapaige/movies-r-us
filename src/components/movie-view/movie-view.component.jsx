import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import Pagination from '../pagination/pagination.component'
import Spinner from '../spinner/spinner.component'
import ErrorMessage from '../error-message/error-message.component'
import BackButton from '../back-button/back-button.component'
import MovieOverview from '../movie-overview-container/movie-overview-container.component'

import './movie-view.styles.scss'

const MovieView = ({history, url, id, title, genre, error, ...props}) => {
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
    },[current, url, genre])

    const next = pageNum => setCurrent(pageNum)

    const numPages = Math.floor(total / 20)

    return (
        <div className = 'movie-view-container'>
            { total !== 0 || undefined ?   

            <section className="movie-list-container">
                <div className="movie-view-header">
                    <h1 className = 'list-title'>{title}</h1>
                    <p>Click on an image to read more or see movies that are similar</p>
                </div>

                {isLoading ? <Spinner />
                :movies.map((movie, i) => 
                    <MovieOverview movie= {movie} key= {i} {...props}/>
                )}
                {total > 20 &&
                    <Pagination pages= {numPages} next={next} current = {current} id= {id}/> }
                 
            </section>             
            : 
            <ErrorMessage error = {error}> 
                <BackButton />
            </ErrorMessage>
            }  
        </div> 
    )
}         
    
export default withRouter(MovieView);