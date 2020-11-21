import React from 'react'
import {NavLink} from 'react-router-dom'

import ImageWithPlaceholder from '../image-with-placeholder/image-with-placeholder.component'
import Substring from '../substring-text/substring-text.component'
import PlayButton from '../play-button/play-button.component'

import './movie-overview-container.styles.scss'

const MovieOverview = ({movie, video, ...props}) => {

    return (
    <div className = 'movie-overview-container slide-up-container'>
        <NavLink to = {`/movie/${movie.id}`}>
            <ImageWithPlaceholder movie = {movie}/>
            <div className="image-overlay"></div>
        </NavLink>
        <div className="movie-overview-container-overlay">
            <Substring bold text = {movie.original_title} limit = '20' />
            <PlayButton id = {movie.id} {...props}/>
            <Substring text = {movie.overview} limit = '50'/>
        </div>
    </div>
    )
}

export default MovieOverview