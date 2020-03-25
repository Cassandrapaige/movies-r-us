import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

/* MOVIEDB API KEY*/
import {API_KEY} from '../../base'

/* COMPONENTS */
import MovieList from '../MovieList'
import Pagination from '../Pagination'

class MovieView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            isLoading: true
        }
    }

    componentDidMount = () => {
    this.setState({ isLoading: true });
    axios.get(`https://api.themoviedb.org/3/movie/${this.props.view}?api_key=${API_KEY}`)
        .then(res => { this.setState({
            movies: res.data.results,
            total: res.data.total_results,
            current: 1,
            isLoading: false
        })
    }, (error => console.log(error)))}

    next = (pageNum) => {
    axios.get(`https://api.themoviedb.org/3/movie/${this.props.view}?api_key=${API_KEY}&page=${pageNum}`)
        .then(res => { 
            window.scrollTo(0, 100);
            this.setState({
            movies: res.data.results,
            current: pageNum,
        })
    }, (error => console.log(error)))}

    render() {
   
    const numPages = Math.floor(this.state.total / 20);
    return (
         <div>
            <h2 className = 'listTitle'>{this.props.title}</h2>
            {this.state.isLoading ? 
                <div className="loading">
                    <div class="lds-facebook"><div></div><div></div><div></div></div>
                </div>
                :
                <MovieList movies={this.state.movies} container= "movieListView"/>
            }
            { this.state.total > 20 ?
                <Pagination pages= {numPages} next={this.next} current = {this.state.current} /> : '' }
         </div>
        )
    }
}

export default MovieView;