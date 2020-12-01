import React from 'react'

import NavItem from '../nav-item/nav-item.component'

import './nav-list.styles.scss'

const NavList = () => (
    <div className = 'nav-list'>
        <NavItem text = 'Now Playing' link='/movies/new&page=1' />
        <NavItem text = 'Most Popular' link='/movies/popular&page=1' />
        <NavItem text = 'Top Rated' link='/movies/top-rated&page=1' />
    </div>
)

export default NavList