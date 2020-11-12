import React, { useState, useEffect} from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import axios from 'axios'

import {API_KEY} from '../../base'

import StarRating from '../../components/star-rating/star-rating.component';
import Spinner from '../../components/spinner/spinner.component'
import Video from '../../components/video/video.component'
import GenreList from '../../components/genre-list/genre-list.component';
import {DateString} from '../../components/date-string/date-string.component'
import BackButton from '../../components/back-button/back-button.component'
import ImageWithPlaceholder from '../../components/image-with-placeholder/image-with-placeholder.component';
import PlayButton from '../../components/play-button/play-button.component';

import './movie-details.styles.scss'

const MovieDetails = ({history, match, ...props}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([])

  let id = match.params.movie_id;

  const fetchResults = async () => {
    const result = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
    setMovie(result.data);
    const genres = await result.data.genres;
    setGenres(genres);
    setIsLoading(false)
  }
  useEffect(() => {
    setIsLoading(true);
    window.scrollTo(0, 80);
    fetchResults();
  },[]) 

  const imagePath = movie.backdrop_path !== null && `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`;
    
  return (
    <div className="individual-movie" style= {{backgroundImage: imagePath}}>
    {isLoading ?  <Spinner /> :
      <div className='individual-movie-container' key={movie.id}>
      <div className="individual-movie-image">
          <ImageWithPlaceholder movie = {movie}/>
        </div>  
          <div className='individual-movie-content'>
            
            <div className="individual-movie-header">
              <h2 className='original-title'>{movie.original_title}</h2>
              <StarRating movie = {movie} />
            </div>

            <div className='action-links'>{movie.homepage && 
              <a href = {movie.homepage} target='_blank' rel='noopener noreferrer' className='website-link'>
                <i className="fas fa-link"></i> Website
              </a>}    
              <PlayButton id = {movie.id} {...props}/>
            </div>

            <div className="individual-movie-overview">
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <DateString date = {movie.release_date}>Release date:</DateString>
            </div>

            <GenreList data = {genres} />
        
            <div className="individual-movie-navigation-btns">
              <BackButton />
              <NavLink to={`/similar/${movie.id}`} className ='similar-btn'>
                See Similar <i className="fas fa-arrow-right"></i>
              </NavLink>
           </div>
        </div> 
  </div> 
  }
  
  </div>
)}

export default withRouter(MovieDetails)