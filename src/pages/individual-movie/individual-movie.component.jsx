import React, { useState, useEffect} from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import axios from 'axios'

import placeholder from '../../images/placeholder.png';

import {stringDate} from '../../App'

import StarRating from '../../components/star-rating/star-rating.component';
import Spinner from '../../components/spinner/spinner.component'
import Video from '../../components/video/video.component'

import {switchGenre} from './individula-movie.utils'
import './individual-movie.styles.scss'

const ShowMovie = ({history, match}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const [showMovie, setShowMovie] = useState(false);
  const [video, setVideo] = useState(null)
  const [genres, setGenres] = useState([])

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      window.scrollTo(0, 100)
  }, 100)
    let id = match.params.movie_id;
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=70dcc58955640e84f5c3ea8e6d2b9ade&language=en-US`)
    .then(result => {
      setMovie(result.data);
      setGenres(result.data.genres)
      setIsLoading(false)
    })
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=70dcc58955640e84f5c3ea8e6d2b9ade&language=en-US`)
    .then(result => {
      setVideo(result.data.results[0].key)
    },(error => console.log(error)))
  },[])
  
  const toggleView = () => setShowMovie(!showMovie)
  
  const goBack = () => history.goBack()

  return (
    <div className="show-movie">
    {movie && !isLoading ? (
       <div className='movie-show' style={showMovie ? {opacity : .2} : {opacity : 1}} key={movie.id}>
            { movie.poster_path !== null ? 
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='movie-show-img' alt={movie.original_title}/>
              : <img src={placeholder} className='movie-show-img' alt={movie.original_title}/>}

              <div className='movie-show-content'>
                  <h3 className='original-title'>{movie.original_title}</h3>
                  <h5>{movie.release_date !== null && 'Release Date:'}<span> {stringDate(movie.release_date)}</span> </h5>
                  <StarRating movie = {movie} />

              <div className='website-link-div'>{movie.homepage ? (
                  <a href = {movie.homepage} target='_blank' rel='noopener noreferrer' className='website-link'>
                    <i className="fas fa-link"></i> Website</a> 
               ) : null}
                    
                  {video && <button onClick = {toggleView} className = 'trailer'><i className="fas fa-play"></i> Play Trailer </button> }
              </div>
                  <h6>Overview</h6>
                  <p className= 'movie-show-overview'>{movie.overview}</p>
                    <p className= 'genre-list'>
                      {genres.map(genre => (
                        <li className='genre-list-item' key={genre.id}>
                        <img className='genre-icon' src={switchGenre(genre.name)} alt={genre.name}/>
                        {genre.name}</li>))}
                    </p>
              <div>
        
              <div className="nav_btns">
                <button onClick = {goBack} className = 'back-btn'> <i className="fas fa-arrow-left"></i> Go back </button>
                <NavLink to={`/similar/${movie.id}`} className ='similarBtn'>See Similar <i className="fas fa-arrow-right"></i></NavLink>
              </div>
          </div>
      </div>           
  </div> 
  ) : <Spinner />}
    { video && showMovie && 
      <Video video = {video} toggleView={toggleView} /> } 
  </div>
  )}

export default withRouter(ShowMovie)