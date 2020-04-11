import React, { useState, useEffect } from 'react'
import axios from 'axios'

/* MOVIEDB API KEY*/
import {API_KEY} from '../../base'

/* COMPONENTS */
import MovieList from '../MovieList'
import Pagination from '../pagination/pagination.component'
import Spinner from '../spinner/spinner.component'

const SearchView = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(props.history.location.search.slice(1))
  const [current, setCurrent] = useState(1)
  const [total, setTotal] = useState()

  useEffect(() => {
    setIsLoading(true)
    window.scrollTo(0, 100);
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${current}`)
    .then(result => {
      setMovies(result.data.results)
      setTotal(result.data.total_results)
      setIsLoading(false) 
    },(error => console.log(error)))
  }, [query, current])

  const next = (pageNum) => {
    setTimeout(() => {
        window.scrollTo(0, 100);
    },500);
    setCurrent(pageNum);
  }

const numPages = Math.floor(total / 20);

  return (
      <div className='search_results'>
        <>
          <h2 className = 'listTitle'> 
            {movies.length ? 'Search results for' : 'No search results for' } '{query}'</h2>
            {isLoading ? <Spinner />
            :<MovieList movies={movies} container= "movieListView" />} 
          </>
          
          { total > 20 ? 
              <Pagination pages= {numPages} next={next} current = {current} /> : '' }    
      </div>
)

}

export default SearchView
