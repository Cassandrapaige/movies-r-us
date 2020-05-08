import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import {animated, config, useSpring} from 'react-spring'

import MovieOverview from '../movie-overview-container/movie-overview-container.component'

import './scrolling-wrapper.styles.scss'

const ScrollingWrapper = ({id, linkRel, url,  children, ...props}) => {
    const [isScrolling, setIsScrolling] = useState(false)
    const [showLeftNav, setShowLeftNav] = useState(false)
    const [showRightNav, setShowRightNav] = useState(true)

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
        setIsLoading(true)
        axios.get(url)
        .then(result => {
            setData(result.data.results)
            setIsLoading(false)
        })
    }, [url])

    const scrollStyles = useSpring({
        config: {
            config: config.wobbly
        },
        paddingLeft: isScrolling ? '0px' : '50px'
    })

    const getScrollPosition = window.innerWidth / 1.2;

    const [scrollPosition, setScrollPosition] = useState(getScrollPosition)

    useEffect(() => {
        window.addEventListener('resize', () => {setScrollPosition(window.innerWidth / 1.2);
        })
        return () => window.removeEventListener('resize', () => setScrollPosition())
    },[])

    const toggleScrollerArrows = elem => {
        const scrollWidth = elem.scrollWidth - elem.offsetWidth

        elem.scrollLeft > 0 ? 
        setShowLeftNav(true)
        : setShowLeftNav(false)
    
        elem.scrollLeft < scrollWidth ?
        setShowRightNav(true)
        : setShowRightNav(false)
    }

    const POS = {
        LEFT: -scrollPosition,
        RIGHT: scrollPosition
    }

    const scrollWrapper = (el, type) => {
        setIsScrolling(true)
        const content = el.target.parentNode.parentNode

        type === 'left' && content.scrollBy(POS.LEFT, 0)
        
        type === 'right' && content.scrollBy(POS.RIGHT, 0)
        
        content.addEventListener('scroll', () => toggleScrollerArrows(content))
    }

    return (
    <animated.div style = {scrollStyles} onMouseLeave = {() => setIsScrolling(false)} className="scrolling-wrapper-container">
        {isLoading ? <div className = 'loading-wrapper'></div>
        :
        <div className='scrolling-wrapper'>

        {data.map(movie => (
            movie.backdrop_path == null ? '' : 
                <MovieOverview fadeIn movie = {movie} {...props}/>
            ))
        }
            <div className="see-more-scroller">
                <NavLink to = {linkRel} >
                See more
                </NavLink>  
            </div>
            {showLeftNav 
                && <div className="left-arrow" onClick = {(el) => scrollWrapper(el, 'left')}><i class="fas fa-chevron-left"></i></div>}
            {showRightNav 
                && <div className="right-arrow" onClick = {(el) => scrollWrapper(el, 'right')}><i class="fas fa-chevron-right"></i></div> }
        </div>}
    </animated.div>
    )
}

export default ScrollingWrapper