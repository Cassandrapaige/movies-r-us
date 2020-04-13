import React, { Fragment } from 'react';
import StarRating from '../star-rating/star-rating.component';
import { NavLink } from 'react-router-dom'

import placeholder from '../../images/placeholder.png';

import {substringOverview} from './movie-list.utils'

import './movie-list.styles.scss'

const MovieList = ({movies}) => {
    
return (
<div className = 'movie-list-view'>
{movies.map(movie => 
    <div className='movie' key={movie.id}>
        <NavLink to ={`/movie/` + movie.id}>

        {/* Add a placeholder image if image === null  */}
        { movie.poster_path !== null ? 
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} className='movie-img' alt={movie.original_title}/>
            : <img src={placeholder} className='movie-img' alt={movie.original_title}/>}
           
            <div className="about-movie">
                <h4 className = 'movie-title'>{movie.original_title}</h4>
                <StarRating movie = {movie} />
                <p className = 'movie-overview'>{substringOverview(movie.overview)}</p>
                <h5>{movie.release_date}</h5>

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
