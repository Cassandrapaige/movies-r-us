import React from 'react'
import {animated, useSpring, useTransition, config} from 'react-spring'

import GenreNav from '../genre-nav/genre-nav.compponent'
import NavList from '../nav-list/nav-list.component'
import Search from '../search-bar/search-bar.component'
import NavItem from '../nav-item/nav-item.component'

import './dropdown-menu.styles.scss'

const DropdownMenu = ({setIsActive, isOpen, ...props}) => {

    const transitions = useTransition(isOpen, null, {
        config: config.default,
        from: {
            transform:'translateX(500px)',
        },
        enter: {
            transform:'translateX(0px)',
        },
        leave: {
            transform:'translateX(500px)',
        }
    })

    return transitions.map(({ item, props}) => item &&(
        <animated.div style = {props} className = 'dropdown-menu'>
            <Search setIsActive = {setIsActive} {...props}/>
            <div className="dropdown-menu-items">
                <h3 className = 'genre-dropdown-title'>Explore</h3>
                <NavItem text = 'Now Playing' link='/movies/new' isDropdown/>
                <NavItem text = 'Most Popular' link='/movies/popular' isDropdown/>
                <NavItem text = 'Top Rated' link='/movies/top-rated' isDropdown/>
                <h3 className = 'genre-dropdown-title'>Explore by genre</h3>
                <GenreNav isDropdown setIsActive = {setIsActive}/>
            </div>
        </animated.div>
    )
)}

export default DropdownMenu