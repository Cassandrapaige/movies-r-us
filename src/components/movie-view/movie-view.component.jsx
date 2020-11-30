import React from 'react'

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

                <div className = "movie-list">
                    {movies.map(movie => 
                        <MovieOverview 
                            isAnimated
                            movie= {movie} 
                            key= {movie.id} 
                            isLoading = {isLoading}
                            {...props}
                        /> 
                    )}
                </div>
                {children}
            </section>             
        </div> 
    )
}         
    
export default MovieView