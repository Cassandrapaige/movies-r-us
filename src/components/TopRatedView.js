import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

/* MOVIEDB API KEY*/
import {API_KEY} from '../base'

/* COMPONENTS */
import MovieList from './MovieList'
import Pagination from './Pagination'

class TopRatedView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        }
    }

    componentDidMount = () => {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
        .then(res => { this.setState({
            movies: res.data.results,
            total: res.data.total_results,
            current: 1
        })
    }, (error => console.log(error)))}

    next = (pageNum) => {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=${pageNum}`)
        .then(res => { this.setState({
            movies: res.data.results,
            current: pageNum
        })
    }, (error => console.log(error)))}

 render() {
    const numPages = Math.floor(this.state.total / 20);

     return (
         <div>
            <h2 className = 'listTitle'>Top Rated</h2>
            <MovieList movies={this.state.movies} container= "movieListView"/>
            { this.state.total > 20 ?
                <Pagination pages= {numPages} next={this.next} current = {this.state.current} /> : '' }
         </div>
        )
    }
}

export default TopRatedView;