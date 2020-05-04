import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink, withRouter } from 'react-router-dom'

import { scrollToTop } from '../../App'

/* MOVIEDB API KEY*/
import {API_KEY} from '../../base'

/* COMPONENTS */
import Pagination from '../pagination/pagination.component'
import MovieList from '../movie-list/movie-list.component'
import Spinner from '../spinner/spinner.component'
import ErrorMessage from '../error-message/error-message.component'
import FilterMenu from '../filter-menu/filter-menu.component'
import BackButton from '../back-button/back-button.component'
import Video from '../video/video.component'

import './movie-view.styles.scss'

const MovieView = ({history, url, title, error, num = 0}) => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [current, setCurrent] = useState(1)
    const [total, setTotal] = useState() 
    const [video, setVideo] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const [listTitle, setListTitle] = useState('Rating Descending')

    const getData = () => {
        axios.get(`${url}&page=${current}`)
        .then(result => {
            setMovies(result.data.results)
            setTotal(result.data.total_results)
        },(error => console.log(error)))
    }

    const fetchVideo = id => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
        .then(result => {
            setVideo(result.data.results[0].key)
            setIsOpen(true)
        },(error => console.log(error)))
    }

    useEffect(() => {
        setIsLoading(true)
        getData()
        scrollToTop(0, 50, setIsLoading)
    },[url, current])

    const next = pageNum => setCurrent(pageNum)

    const sortByType = (type, maths, event) => {
        setIsLoading(true)

        if(maths === 'ascending') {
            setMovies(movies.sort((a, b) => (a[type] > b[type]) - (a[type] < b[type])))
        }
        else if(maths === 'descending') {
            setMovies(movies.sort((a, b) => (a[type] < b[type]) - (a[type] > b[type])))
        } 

        setIsOpen(!isOpen)       
        setListTitle(event.target.textContent)
        scrollToTop(num, 50, setIsLoading)
    }

    const numPages = Math.floor(total / 20)

    return (
        <div className = 'movie-list-container'>
            {
                isOpen &&
                <Video video = {video} toggleView = {() => setIsOpen(!isOpen)}/>
            }

            { total !== 0 ?
            
            <MovieList 
                isLoading= {isLoading}
                movies={movies} 
                action = {fetchVideo}>
                <h1>{title}</h1>
            </MovieList>              
            : 
            <ErrorMessage error = {error}> 
                <BackButton />
            </ErrorMessage>}  
        
            { total > 20 ? 
            <Pagination pages= {numPages} next={next} current = {current} /> : '' }  
        </div> 
    )
}         
    
export default withRouter(MovieView);