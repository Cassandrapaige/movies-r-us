import React from 'react'
import {animated, useSpring, config, useTransition} from 'react-spring'

import NavItem from '../nav-item/nav-item.component'

import './nav-list.styles.scss'

const NavList = ({active}) => {

    return (
    <animated.div className = {`dropdown-content ${active && 'slide_in'}`}>
        <NavItem text = 'Now Playing' link='/movies/new' />
        <NavItem text = 'Most Popular' link='/movies/popular' />
        <NavItem text = 'Top Rated' link='/movies/top-rated'/>
    </animated.div>
)
}

export default NavList