import React, { Component, Fragment } from 'react'
import axios from 'axios'

/* MOVIEDB API KEY*/
import {API_KEY} from '../../base'

/* COMPONENTS */
import MovieList from '../MovieList'
import Search from '../Search'
import Pagination from '../Pagination'
import Spinner from '../Spinner'

class SearchView extends Component {
    constructor(props) {
        super(props)
        this.state = {
          movies: [],
          query: this.props.history.location.search.slice(1),
          isLoading: true
        }
      }
    
      componentDidMount = () => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${this.state.query}`)
        .then(res => {
          this.setState({
            movies: res.data.results,
            total: res.data.total_results,
            current: 1,
            query: this.props.history.location.search.slice(1),
            isLoading: false
          })
      },(error => console.log(error)))}

    next = (pageNum) => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${this.state.query}&page=${pageNum}`)
        .then(res => {
          window.scrollTo(0, 100);
            this.setState({
                movies: res.data.results,
                current: pageNum
        })
    }, (error => console.log(error)))}

    render() {
    const numPages = Math.floor(this.state.total / 20);
    return (
        <Fragment>
            <div className='search_results'>
            <Fragment>
            <h2 className = 'listTitle'> 
              {this.state.movies.length ? 'Search results for' : 'No search results for' } '{this.state.query}'</h2>
              {this.state.isLoading ? 
              <Spinner />
              :
              <MovieList movies={this.state.movies} container= "movieListView" />
              } 
            </Fragment>
            
            { this.state.total > 20 ? 
                <Pagination pages= {numPages} next={this.next} current = {this.state.current} /> : '' }    
            </div>
        </Fragment>
        )   
    }
}
export default SearchView
