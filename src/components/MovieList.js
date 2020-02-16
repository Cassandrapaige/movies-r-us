import React, { Fragment } from 'react';
import StarRating from './StarRating';
import { NavLink } from 'react-router-dom'

/* PLACEHOLDER IMAGE */
import placeholder from '../images/placeholder.png';

/* DISPLAY MAX 80 CHARACTERS OF MOVIE-OVERVIEW */
const substringOverview = (desc, limit= 80) => {
    const fullDesc = [];
    if(desc.length > limit) {
        desc.split(' ').reduce((acc, cur) => {
    if(acc + cur.length <= limit) {
        fullDesc.push(cur);
    }
    return acc + cur.length;
    }, 0);
    return `${fullDesc.join(' ')}..`;}
    return desc;
}

const MovieList = ({movies, children, container}) => {
const MovieViewListing = movies.map(movie => {
return movies.length ? (
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
                See more<i className ="fas fa-arrow-right sm-arrow"></i></NavLink>      
                </NavLink>
            </div>
		</div>
       
) :  <div className='movieList'>
        <h6> 'Oops. Where did all the movies go? ' </h6>
    </div>
})
 
    return (
    <div className= {container}>
        { MovieViewListing }
    </div>
    )
}

export default MovieList;
