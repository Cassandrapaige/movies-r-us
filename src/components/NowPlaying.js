import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

/* COMPONENTS */
import MovieList from './MovieList'
import ListView from './ListView'

/* MOVIEDB API KEY*/
import {API_KEY} from '../base'

class NowPlaying extends Component {
constructor(props) {
    super(props);
    this.state = {
        movies: []
    }
}

componentDidMount = () => {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
        .then(res => {
        this.setState({
            movies: res.data.results
        })
    }, (error => console.log(error))
)}

 render() {
     return (
         <ListView 
            type= 'now-playing'
            title = 'Now Playing'>
            <MovieList movies={this.state.movies}>
                <Link to = {`/` + this.state.movies.map((movie) => movie.id)} className='movie-link'>
                See more<i className ="fas fa-arrow-right sm-arrow"></i></Link> 
            </MovieList>   
        </ListView>
        )
    }
}

export default NowPlaying;