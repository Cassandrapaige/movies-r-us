import React, { Fragment } from 'react';
import StarRating from '../star-rating/star-rating.component';
import { NavLink } from 'react-router-dom'

import placeholder from '../../images/placeholder.png';

import {substringOverview} from './movie-list.utils'

import {stringDate} from '../../App'

import './movie-list.styles.scss'

const MovieList = ({movies, playVideo, video}) => {
    
return (
<div className = 'movie-list-view'>
{movies.map(movie => 
    <div className='movie' key={movie.id}>
        <div className="image">
        { movie.poster_path !== null ? 
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} className='movie-img' alt={movie.original_title}/>
                : <img src={placeholder} className='movie-img' alt={movie.original_title}/>}
            
            {video ?    
                <div className="play-button">
                    <i class="far fa-play-circle" onClick = {() => playVideo(movie.id)}></i>
                </div> : '' }
            </div>
        <NavLink to ={`/movie/` + movie.id}>
            <div className="about-movie">
                <h4 className = 'movie-title'>{movie.original_title}</h4>
                <h5>{stringDate(movie.release_date)}</h5>
                <StarRating movie = {movie} />
                <p className = 'movie-overview'>{substringOverview(movie.overview)}</p>
            </div>
         </NavLink>

        <NavLink to = {`/movie/${movie.id}`} className='movie-link'>
            See more<i className ="fas fa-arrow-right sm-arrow"></i>
        </NavLink>      
    </div>
)}
</div>
)}


export default MovieList;
