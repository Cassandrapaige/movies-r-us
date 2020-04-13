import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink, withRouter } from 'react-router-dom'

/* MOVIEDB API KEY*/
import {API_KEY} from '../../base'

/* COMPONENTS */
import Pagination from '../pagination/pagination.component'
import MovieList from '../movie-list/movie-list.component'
import Spinner from '../spinner/spinner.component'
import ErrorMessage from '../error-message/error-message.component'
import FilterMenu from '../filter-menu/filter-menu.component'

import './movie-view.styles.scss'

const MovieView = ({history, url, title, error, num = 100}) => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [current, setCurrent] = useState(1)
    const [total, setTotal] = useState() 
    const [isOpen, setIsOpen] = useState(false)
    const [listTitle, setListTitle] = useState('Rating Descending')

    useEffect(() => {
        setIsLoading(true)
        axios.get(`${url}&page=${current}`)
        .then(result => {
            setMovies(result.data.results)
            setTotal(result.data.total_results)
            setIsLoading(false)
        },(error) => console.log(error))
    },[url, current])

    const next = pageNum => {
        setTimeout(() => {
            window.scrollTo(0, num)
        }, 50)
        setCurrent(pageNum)
    }

    // const filteredList = movies.sort((a, b) => (a[type] < b[type]) - (a[type] > b[type]))

    const goBack = () => history.goBack()

    const numPages = Math.floor(total / 20)

    const handleSort = (type, maths, event) => {
        if(maths === 'ascending') {
            setMovies(movies.sort((a, b) => (a[type] > b[type]) - (a[type] < b[type])))
        }
        else if(maths === 'descending') {
            setMovies(movies.sort((a, b) => (a[type] < b[type]) - (a[type] > b[type])))
        } 
        setIsOpen(!isOpen)       
        setListTitle(event.target.textContent)
    }
    
    return (

        <div className = 'movie-list-container'>
            <FilterMenu handleClick = {handleSort} setIsOpen = {setIsOpen} isOpen = {isOpen} title = {listTitle}>
                <h2 className = 'list-title'>{title}</h2>
            </FilterMenu>
            { total !== 0 ?

            <div className='movie-list'>   
                {isLoading ? <Spinner /> : <MovieList movies={movies} />} 
            </div>
                
            : <ErrorMessage error = {error} goBack={goBack} />}  
        
            { total > 20 ? 
            <Pagination pages= {numPages} next={next} current = {current} /> : '' }  
        </div> 
    )
}         
    

export default withRouter(MovieView);
