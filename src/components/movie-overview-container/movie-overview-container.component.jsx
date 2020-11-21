import React, {Suspense} from 'react'
import {NavLink} from 'react-router-dom'

import ImageWithPlaceholder from '../image-with-placeholder/image-with-placeholder.component'
import Substring from '../substring-text/substring-text.component'
import PlayButton from '../play-button/play-button.component'
import SkeletonScreen from '../skeleton-screen/skeleton-screen.component'

import './movie-overview-container.styles.scss'

const MovieOverview = ({isLoading, movie, video, data, isAnimated, ...props}) => {

    return (
        <div className = {`movie-overview-container ${isAnimated && 'slide-up-container'}`} style= {{maxWidth: data && data.length < 3 ? `300px` : `auto`}}>
        {
            isLoading ? 
            <SkeletonScreen />
            :
            <>
            <NavLink to = {`/movie/${movie.id}`}>
                <ImageWithPlaceholder movie = {movie}/>
                <div className="image-overlay"></div>
            </NavLink>
            <div className="movie-overview-container-overlay">
                <Substring bold text = {movie.original_title} limit = '20' />
                <PlayButton id = {movie.id} {...props}/>
                <Substring text = {movie.overview} limit = '50'/>
            </div>
            </>
        }
        </div>
    )
}

export default MovieOverview