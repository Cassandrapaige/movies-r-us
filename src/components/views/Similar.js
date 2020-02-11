import React, { Component } from 'react'
import axios from 'axios'
import Pagination from '../Pagination'
import MovieView from './MovieView'


class Similar extends Component {
    state = {
        movies: []
    }

    componentDidMount = () => {
        let id = this.props.match.params.movie_id;
        axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=70dcc58955640e84f5c3ea8e6d2b9ade&language=en-US`)
            .then(res => {
                this.setState({
                    movies: res.data.results,
                    results: res.data.total_results,
                    total: res.data.total_results,
                    current: 1
             })
             console.log(this.state.results)
        })
    }

    next = (pageNum) => {
        let id = this.props.match.params.movie_id;
        axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=70dcc58955640e84f5c3ea8e6d2b9ade&language=en-US&page=${pageNum}`)
        .then(res => {
            this.setState({
                movies: res.data.results,
                current: pageNum
         }).catch(err => console.error(err.message));
    })
    }
    render() {
    const numPages = Math.floor(this.state.total / 20);
    return (
        <div className='similar'>
             <h2 className = 'listTitle'>Similar Movies</h2>
             {this.state.results !== 0 ? 
                <MovieView movies={this.state.movies} /> 
                :
                <h6>Apparently this movie is just so original that no other can compare.</h6>
             } 
            
            { this.state.total > 20 ? <Pagination pages= {numPages} next={this.next} current = {this.state.current} /> : '' }    
         </div>
    )
}
}

export default Similar;
