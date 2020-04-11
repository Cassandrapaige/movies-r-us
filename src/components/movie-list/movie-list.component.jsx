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
        <div className = 'movie-content'>
            <NavLink to ={`/` + movie.id}>
                { movie.poster_path !== null ? 
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} className='movie-img' alt={movie.original_title}/>
                : <img src={placeholder} className='movie-img' alt={movie.original_title}/>}
           
                <div className="about-movie">
                    <h4 className = 'movie-title'>{movie.original_title}</h4>
                    <p className = 'movie-overview'>{substringOverview(movie.overview)}</p>
                    <StarRating movie = {movie} />
                </div>

                <NavLink to = {`/` + movie.id} className='movie-link'>
                    See more<i className ="fas fa-arrow-right sm-arrow"></i>
                </NavLink>      
            </NavLink>
        </div>
    </div>
)}
</div>
)}


export default MovieList;
