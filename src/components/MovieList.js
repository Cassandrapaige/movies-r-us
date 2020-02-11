import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom'
import placeholder from '../images/placeholder.png';
import StarRating from './StarRating';

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

const ListView = ({movies, children}) => {
const MovieViewListing = movies.map(movie => {
return movies.length ? (
    <div className='movieList' key={movie.id}>
        <div className = 'movie-content'>
        <NavLink to ={`/` + movie.id}>
            { movie.poster_path !== null ? 
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} className='movie-img' alt={movie.original_title}/>
            : <img src={placeholder} className='movie-img' alt={movie.original_title}/>}
        </NavLink>
            <div className="about-movie">
                <h4 className = 'movie-title'>{movie.original_title}</h4>
                <p className = 'movie-overview'>{substringOverview(movie.overview)}</p>
                <StarRating movie = {movie} />
            </div>
                {children}   
            </div>
		</div>

) :  <div className='movieList'>
        <h6> 'Oops. Where did all the movies ago? ' </h6>
    </div>
})
 
    return (
    <Fragment>
        <div className = 'movieListView'>
            { MovieViewListing }
        </div>
    </Fragment>
    )
}

export default ListView;
