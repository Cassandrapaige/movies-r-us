import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

import {GENRE_DATA} from '../../constants'
import {API_KEY} from '../../base'

import './scrolling-wrapper.styles.scss'

const ScrollingWrapper = ({id}) => {
    const [data, setData] = useState([])

    let title = Object.keys(GENRE_DATA).map(key => GENRE_DATA[id].genre)
    
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}`)
        .then(result => setData(result.data.results))
    }, [])

    const scrollWrapper = (el, type) => {
        const content = el.target.parentNode.parentNode;
        if(type === 'left') {
            content.scrollBy(-1000, 0)
        }
        if(type === 'right') {
            content.scrollBy(1000, 0)
        }
    }

    return (
    <div className="genre-scroll-wrapper">
        <h3>{title[0]}</h3>
        <div className="scrolling-wrapper">
            {
                data.map(movie => (
                <>{movie.backdrop_path == null ? '' : 
                <div className = 'scrolling-wrapper-item'>
                    <NavLink to = {`/movie/${movie.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.original_title} key = {movie.id}/>
                        <h4>{movie.original_title}</h4>
                    </NavLink> 
                </div>
                }</>
                ))
            }
            <div className="see-more-scroller">
                <NavLink to = {`/movies/genre/${id}`} >
                    See more
                </NavLink>  
            </div>
            <div className="right-arrow" onClick = {(el) => scrollWrapper(el, 'right')}><i class="fas fa-chevron-right"></i></div>
            <div className="left-arrow" onClick = {(el) => scrollWrapper(el, 'left')}><i class="fas fa-chevron-left"></i></div>
        </div>
    </div>
    )
}

export default ScrollingWrapper