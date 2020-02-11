import React, { Component } from 'react'
import axios from 'axios'
import MovieList from './MovieList'
import arrow from '../images/arrow.png'

class Popular extends Component {
state = {
    movies: []
}

componentDidMount() {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=70dcc58955640e84f5c3ea8e6d2b9ade')
        .then(res => {
        this.setState({
            movies: res.data.results
        })
    })
}

 render() {
    const { address } = this.props;

     return (
         <div className = 'popular'>
            <h2>Most Popular</h2>
            <MovieList movies={this.state.movies} address='/popular' />
            <div className="left_arrow">
                <img src={arrow} alt=""/>
            </div>
         </div>
        )
    }
}

export default Popular;