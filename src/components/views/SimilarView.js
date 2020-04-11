import React, { Component, Fragment } from 'react'
import axios from 'axios'

/* MOVIEDB API KEY*/
import {API_KEY} from '../../base'

/* COMPONENTS */
import Pagination from '../pagination/pagination.component'
import MovieList from '../MovieList'
import Spinner from '../spinner/spinner.component'

class Similar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            isLoading: true
        }
    }

    componentDidMount = () => {
        let id = this.props.match.params.movie_id;
        axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US`)
        .then(res => {
            this.setState({
                movies: res.data.results,
                total: res.data.total_results,
                current: 1,
                isLoading: false
            })
            console.log(this.state.movies);
        },(error => console.log(error)))}
    
    next = (pageNum) => {
        setTimeout(function () {
            window.scrollTo(0, 100);
        },500);
        let id = this.props.match.params.movie_id;
        axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=${pageNum}`)
        .then(res => {
            this.setState({
                movies: res.data.results,
                current: pageNum,
                isLoading: false
         })
       }, (error => console.log(error)))}

    goBack = () =>{
        this.props.history.goBack();
    }

    render() {
    const numPages = Math.floor(this.state.total / 20);
    return (
        <Fragment>
            { this.state.total !== 0 ?
                <div className='similar'>
                <h2 className = 'listTitle'>Similar Movies</h2>
                {this.state.isLoading ? 
                    <Spinner />
                 :   
                    <MovieList movies={this.state.movies} container= "movieListView" />}
                </div>
                : 
                <div className = 'err'><h3 className ='errorMsg'>Apparently this movie is just so original that no other can compare.</h3>
                <button onClick = {this.goBack} className = 'back-btn'> <i class="fas fa-arrow-left"></i> Go back </button>       
                </div>
            }  
        
            { this.state.total > 20 ? 
            <Pagination pages= {numPages} next={this.next} current = {this.state.current} /> : '' }   
        </Fragment> 
    )
}
}

export default Similar;
