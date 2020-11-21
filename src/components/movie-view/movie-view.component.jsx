import React, { useState, useEffect, useRef } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import Pagination from '../pagination/pagination.component'
import Spinner from '../spinner/spinner.component'
import BackButton from '../back-button/back-button.component'
import MovieOverview from '../movie-overview-container/movie-overview-container.component'

import './movie-view.styles.scss'

const MovieView = ({title, error, subtext, movies, isLoading, total, children, ...props}) => {
    return (
        <div className = 'movie-view-container'>
            <section className="movie-list-container">
                <div className="movie-view-header">
                    <h1 className = 'list-title'>{title}</h1>
                    <p>{subtext}</p>
                </div>

                {isLoading ?  <Spinner />
                : movies.map(movie => 
                    <MovieOverview movie= {movie} key= {movie.id} {...props}/> )}
                    
                {children}
            </section>             
        </div> 
    )
}         
    
export default MovieView