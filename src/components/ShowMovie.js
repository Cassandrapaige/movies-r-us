import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import placeholder from '../images/placeholder.png';

class ShowMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: null
      }
    }

    componentDidMount = () => {
        let id = this.props.match.params.movie_id;
        axios.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=70dcc58955640e84f5c3ea8e6d2b9ade&language=en-US')
        .then(res => {
            this.setState({
                movie: res.data
         })
    }, (error => console.log(error)))}

    goBack = () =>{
      this.props.history.goBack();
    }

    /* ADD ICONS DEPENDING ON GENRE ARRAY */
    switchGenre = (img) => {
        var genre = "";
      switch(img) {
        case 'Drama':
          genre = 'https://img.icons8.com/color/48/000000/drama.png'
          break;
        case 'History':
          genre= 'https://img.icons8.com/color/48/000000/coliseum.png'
          break;
        case 'Romance':
          genre= 'https://img.icons8.com/offices/48/000000/romantic-movies.png'
          break;
        case 'Action':
          genre = 'https://img.icons8.com/doodle/48/000000/boom.png'
          break;
        case 'Horror':
          genre= 'https://img.icons8.com/color/48/000000/horror.png'
          break;
        case 'Comedy':
          genre= 'https://img.icons8.com/color/48/000000/popeye.png'
          break;
        case 'Crime':
          genre=    'https://img.icons8.com/color/48/000000/walter-white.png'
          break;
        case 'Animation':
          genre= 'https://img.icons8.com/color/48/000000/woody-woodpecker.png'
          break;
        case 'Family':
            genre= 'https://img.icons8.com/color/48/000000/family-two-women.png'
        break;
        case 'Music':
            genre= 'https://img.icons8.com/color/48/000000/us-music.png'
        break;
        case 'Thriller':
            genre= 'https://img.icons8.com/ultraviolet/40/000000/scream.png'
        break;
        case 'Mystery':
            genre= 'https://img.icons8.com/color/48/000000/sherlock-holmes.png'
        break;
        case 'Adventure':
            genre= 'https://img.icons8.com/color/48/000000/hot-air-balloon.png'
        break;
        default:
          genre= 'https://img.icons8.com/doodle/48/000000/documentary.png'
          break;
      }
        return genre;
      }

    render() {
        const movie = this.state.movie ? (
            <div className='movie-show' key={this.state.movie.id}>
            {this.state.movie.poster_path !== null ? 
              <img src={`https://image.tmdb.org/t/p/w500/${this.state.movie.poster_path}`} className='movie-show-img' alt={this.state.movie.original_title}/>
              : <img src={placeholder} className='movie-show-img' alt={this.state.movie.original_title}/>
              }
                <div className='movie-show-content'>
                    <h3 className='original-title'>{this.state.movie.original_title}</h3>
                    <p className= 'movie-show-overview'>{this.state.movie.overview}</p>
                    <p className= 'genre-list'>{this.state.movie.genres.map(genre => <li className='genre-list-item' key={genre.id}><img className='genre-icon' src={this.switchGenre(genre.name)} alt={genre.name}/>{genre.name}</li>)}</p>
                    <div className='website-link-div'>{this.state.movie.homepage !== null ? (
                    <a href = {this.state.movie.homepage} target='_blank' rel='noopener noreferrer' className='website-link'><button className='webLink'>Website <i className="fas fa-link"></i></button></a>
                    ) : null}
                    <NavLink to={'/similar/'+this.state.movie.id} className ='similarBtn'>Similar <i class="fas fa-tv"></i></NavLink>
                    <button onClick = {this.goBack}>
                    Go back <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <div>
                  </div>
                </div> 
            </div>
        ) : (
            <div className='movie-show'></div>
        ) 

        return(

            <div className='show-movie'>
                {movie}
            </div>
        )
    }

}

export default ShowMovie;