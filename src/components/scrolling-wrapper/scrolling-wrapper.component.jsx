import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import {animated, config, useSpring} from 'react-spring'

import {GENRE_DATA} from '../../constants'
import {API_KEY} from '../../base'

import MovieOverview from '../movie-overview-container/movie-overview-container.component'
import Spinner from '../spinner/spinner.component'

import './scrolling-wrapper.styles.scss'

const ScrollingWrapper = ({id, ...props}) => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isScrolling, setIsScrolling] = useState(false)
    const [showLeftNav, setShowLeftNav] = useState(false)
    const [showRightNav, setShowRightNav] = useState(true)

    const scrollStyles = useSpring({
        config: {
            config: config.wobbly
        },
        paddingLeft: isScrolling ? '0px' : '50px'
    })

    let title = Object.keys(GENRE_DATA).map(key => GENRE_DATA[id].genre)
    
    useEffect(() => {
        setIsLoading(true)
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}`)
        .then(result => {
            setData(result.data.results)
            setIsLoading(false)
        })
    }, [])
 
    const scrollWrapper = (el, type) => {
        setIsScrolling(true)
        const content = el.target.parentNode.parentNode;
        let scrollWidth = (content.scrollWidth - content.offsetWidth);

        if(type === 'left') {
            content.scrollBy(-1000, 0)
        }
        if(type === 'right') {
            content.scrollBy(1000, 0)
        }
        content.addEventListener('scroll', () => {
            if(content.scrollLeft > 0) {
                setShowLeftNav(true)
            }else {
                setShowLeftNav(false)
            }
            if(content.scrollLeft < scrollWidth) {
                setShowRightNav(true)
            }else {
                setShowRightNav(false)
            }
        })
    }

    return (
    <animated.div style = {scrollStyles} onMouseLeave = {() => setIsScrolling(false)} className="genre-scroll-wrapper">
        <h3>{title[0]}</h3>
        {isLoading ? <Spinner/> :
        <div className="scrolling-wrapper">
            {
                data.map(movie => (
                <>{movie.backdrop_path == null ? '' : 
                    <MovieOverview movie = {movie} {...props}/>
                }</>
                ))
            }
            <div className="see-more-scroller">
                <NavLink to = {`/movies/genre/${id}`} >
                    See more
                </NavLink>  
            </div>
            {showLeftNav && <div className="left-arrow" onClick = {(el) => scrollWrapper(el, 'left')}><i class="fas fa-chevron-left"></i></div>}
            {showRightNav && <div className="right-arrow" onClick = {(el) => scrollWrapper(el, 'right')}><i class="fas fa-chevron-right"></i></div> }
        </div>}
    </animated.div>
    )
}

export default ScrollingWrapper