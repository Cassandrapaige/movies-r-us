import React, { Component } from 'react'
import axios from 'axios'

/* COMPONENTS */
import MovieList from './MovieList'
import ListView from './ListView'

/* MOVIEDB API KEY*/
import {API_KEY} from '../base'

class Popular extends Component {
constructor(props) {
    super(props);
    this.state = {
        movies: []
    }
}

componentDidMount = () => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
        .then(res => {
        this.setState({
            movies: res.data.results,
        })
    }, (error => console.log(error))
)}

 render() {
     return (
        <ListView 
            type= 'popular'
            title = 'Most Popular'>
            <MovieList 
                movies={this.state.movies} container={this.props.container}/>
        </ListView>
        )
    }
}

export default Popular;