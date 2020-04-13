import React, {useState} from 'react'
import {useSpring, config, animated} from 'react-spring'

import Search from '../search-bar/search-bar.component'

import './filter-menu.styles.scss'

const FilterMenu = ({children, handleClick, setIsOpen, isOpen, title}) => {

    const props = useSpring({
        config: config.gentle,
        from: {
            height: '0px',
            transform: 'translateY(-100px)'
        },
        to: {
            height: isOpen ? '100%' : '0px',
            transform: isOpen ? 'translateY(0px)' : 'translateY(-100px)'
        },
        duration: 2000
    })

    

    return (
        <div className = 'filter-menu'>
            {children}
            <div className = 'filter-card'>
                <div className="title">
                    <h3 className="title">Sort</h3>
                </div>
                    <div className="dropdown">
                        <h4>Sort Results By</h4>
                        <div className="active-block" onClick = {() => setIsOpen(!isOpen)}>{title} 
                            <span className = 'arrow'>▼</span>
                        </div>
                        {isOpen ?  (
                        <animated.ul style={props} className = 'dropdown-list'>
                            <li onClick = {(e) => handleClick('vote_average','ascending', e)}>Rating Ascending</li>
                            <li onClick = {(e) => handleClick('vote_average','descending', e)}>Rating Descending</li>
                            <li onClick = {(e) => handleClick('release_date','ascending', e)}>Release Date Ascending</li>
                            <li onClick = {(e) => handleClick('release_date','descending', e)}>Release Date Descending</li>
                            <li onClick = {(e) => handleClick('original_title','ascending', e)}>Title (A-Z)</li>
                            <li onClick = {(e) => handleClick('original_title','descending', e)}>Title (Z-A)</li>
                        </animated.ul>
                        
                        ): '' }
                     
                    </div>
                </div>
            <Search/>
        </div>
    )
}

export default FilterMenu