import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

import placeholder from '../../images/placeholder.png';

import StarRating from '../../components/star-rating/star-rating.component';
import Spinner from '../../components/spinner/spinner.component'
import Video from '../../components/video/video.component'

import {switchGenre} from './individula-movie.utils'
import './individual-movie.styles.scss'

class ShowMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            movie: null,
            showMovie: true
        }
    }

    componentDidMount = () => {
        window.scrollTo(0, 100);
        let id = this.props.match.params.movie_id;
        axios.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=70dcc58955640e84f5c3ea8e6d2b9ade&language=en-US')
        .then(res => {
            this.setState({
                movie: res.data,
                isLoading: false        
            });
        })
         axios.get('https://api.themoviedb.org/3/movie/' + id + '/videos?api_key=70dcc58955640e84f5c3ea8e6d2b9ade&language=en-US')
         .then(res => {
           this.setState({
             video: res.data.results[0].key
           })
         },(error => console.log(error)))
    };

    
    toggleView = () => {
      console.log('clicking')
      this.setState({
        showMovie: !this.state.showMovie
      })
    }

    goBack = () =>{
      this.props.history.goBack();
    }

    render() {
        const movie = this.state.movie && !this.state.isLoading ? (
             <div className='movie-show' style={this.state.showMovie ? {opacity : .2} : {opacity : 1}} key={this.state.movie.id}>
            { this.state.movie.poster_path !== null ? 
              <img src={`https://image.tmdb.org/t/p/w500/${this.state.movie.poster_path}`} className='movie-show-img' alt={this.state.movie.original_title}/>
              : <img src={placeholder} className='movie-show-img' alt={this.state.movie.original_title}/>
              }
                <div className='movie-show-content'>
                    <h3 className='original-title'>{this.state.movie.original_title}</h3>
                    <h5>Release Date:<span> {this.state.movie.release_date}</span> </h5>

                    <StarRating movie = {this.state.movie} />
                    <div className='website-link-div'>{this.state.movie.homepage ? (
                      <a href = {this.state.movie.homepage} target='_blank' rel='noopener noreferrer' className='website-link'><button className='webLink'><i className="fas fa-link"></i> Website</button></a>
                      ) : null}
                      {this.state.video && <button onClick = {this.showMovie} className = 'trailer'><i class="fas fa-play"></i> Play Trailer </button> }
                    </div>
                      <h6>Overview</h6>
                      <p className= 'movie-show-overview'>{this.state.movie.overview}</p>
                      <p className= 'genre-list'>{this.state.movie.genres.map(genre => <li className='genre-list-item' key={genre.id}><img className='genre-icon' src={switchGenre(genre.name)} alt={genre.name}/>{genre.name}</li>)}</p>
                    <div>
                    <div className="nav_btns">
                      <button onClick = {this.goBack} className = 'back-btn'> <i class="fas fa-arrow-left"></i> Go back </button>
                      <NavLink to={'/similar/'+this.state.movie.id} className ='similarBtn'>See Similar <i class="fas fa-arrow-right"></i></NavLink>
                    </div>
                </div>
              </div> 
            </div>
          
        ) : (
          <Spinner/>
        ) 

        return(
            <div className='show-movie'>
                 {movie}
  
                {
                  this.state.video && this.state.showMovie && 
                  <Video video = {this.state.video} toggleView={this.toggleView} />
                } 
            </div>
        )
    }
}

export default ShowMovie;