import React, {useState} from 'react'
import {useSpring, config, animated} from 'react-spring'

import Search from '../search-bar/search-bar.component'
import Video from '../video/video.component'

import scrollToTop from '../../App'
import './filter-menu.styles.scss'

const FilterMenu = ({children, video, action, setIsOpen, isOpen, title}) => {

    const props = useSpring({
        config: config.gentle,
        from: {
            height: '0px',
            transform: 'translateY(-100px)',
            backgroundColor: '#161616',
        },
        to: {
            height: isOpen ? '100%' : '0px',
            transform: isOpen ? 'translateY(0px)' : 'translateY(-100px)'
        },
        duration: 500
    })

    return (
        <div className = 'filter-menu'>
            {children}
            <div className = 'filter-card'>
                    <h3 className="filter-title">Sort</h3>
                    <div className="dropdown">
                        <h4>Sort Results By</h4>
                        <div className="active-block" onClick = {() => setIsOpen(!isOpen)}>{title} 
                            <span className = 'arrow'>▼</span>
                        </div>
                        {isOpen ?  (
                        <animated.ul style={props} className = 'dropdown-list'>
                            <li onClick = {(e) => action('vote_average','ascending', e)}>Rating Ascending</li>
                            <li onClick = {(e) => action('vote_average','descending', e)}>Rating Descending</li>
                            <li onClick = {(e) => action('release_date','ascending', e)}>Release Date Ascending</li>
                            <li onClick = {(e) => action('release_date','descending', e)}>Release Date Descending</li>
                            <li onClick = {(e) => action('original_title','ascending', e)}>Title (A-Z)</li>
                            <li onClick = {(e) => action('original_title','descending', e)}>Title (Z-A)</li>
                        </animated.ul>
                        
                        ): '' }
                    </div>
                </div>
                <div className="filter_video">
                    <iframe src={`https://www.youtube.com/embed/${video}?autoplay=1&loop=1&autopause=0`} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                </div>
            <Search/>
        </div>
    )
}

export default FilterMenu