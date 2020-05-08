import React from 'react'

import NavItem from '../nav-item/nav-item.component'

import './nav-list.styles.scss'

const NavList = () => (
    <div className = 'nav-list'>
        <NavItem text = 'Now Playing' link='/movies/new' />
        <NavItem text = 'Most Popular' link='/movies/popular' />
        <NavItem text = 'Top Rated' link='/movies/top-rated'/>
    </div>
)

export default NavList