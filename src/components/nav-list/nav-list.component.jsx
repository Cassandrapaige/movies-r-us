import React from 'react'

import NavItem from '../nav-item/nav-item.component'

import './nav-list.styles.scss'

const NavList = ({isDropdown}) => (
    <div className = {`${isDropdown ? 'dropdown-nav-list' : 'nav-list'}`}>
        <NavItem text = 'Now Playing' link='/movies/new' isDropdown = {isDropdown}/>
        <NavItem text = 'Most Popular' link='/movies/popular' isDropdown = {isDropdown}/>
        <NavItem text = 'Top Rated' link='/movies/top-rated' isDropdown = {isDropdown}/>
    </div>
)

export default NavList