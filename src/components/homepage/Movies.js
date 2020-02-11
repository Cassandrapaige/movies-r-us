import React, { Component } from 'react'
import axios from 'axios'

/* COMPONENTS */
import MovieList from '../MovieList'
import ListItem from '../ListItem'

/* MOVIEDB API KEY*/
import {API_KEY} from '../../base'

class Movies extends Component {
constructor(props) {
    super(props);
    this.state = {
        movies: []
    }
}

componentDidMount = () => {
    axios.get(`https://api.themoviedb.org/3/movie/${this.props.view}?api_key=${API_KEY}`)
        .then(res => {
        this.setState({
            movies: res.data.results,
        })
    }, (error => console.log(error))
)}

 render() {
     return (
        <ListItem 
            type= {this.props.view}
            title = {this.props.title}>
            <MovieList 
                movies={this.state.movies} container={this.props.container}/>
        </ListItem>
        )
    }
}

export default Movies;