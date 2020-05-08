import React from 'react'

import GenreNav from '../genre-nav/genre-nav.compponent'
import NavList from '../nav-list/nav-list.component'
import Search from '../search-bar/search-bar.component'
import NavItem from '../nav-item/nav-item.component'

import './dropdown-menu.styles.scss'

const DropdownMenu = ({setIsActive}) => {
    return (
        <div className = 'dropdown-menu'>
            <Search />
            <div className="dropdown-menu-items">
                <NavItem text = 'Now Playing' link='/movies/new' isDropdown/>
                <NavItem text = 'Most Popular' link='/movies/popular' isDropdown/>
                <NavItem text = 'Top Rated' link='/movies/top-rated' isDropdown/>
                <h3 className = 'genre-dropdown-title'>Search by genre</h3>
                <GenreNav isDropdown setIsActive = {setIsActive}/>
            </div>
        </div>
    )
}

export default DropdownMenu