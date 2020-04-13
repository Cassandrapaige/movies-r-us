import React, {useState} from 'react'
import {withRouter, NavLink} from 'react-router-dom'

import './navbar.styles.scss'

import NavList from '../nav-list/nav-list.component'
import Search from '../search-bar/search-bar.component'
import HamburgerMenu from '../hamburger-menu/hamburger-menu.component'

const Navbar = ({history}) => {

    return (
        <nav className = 'nav'>
        <NavLink to = '/'><h4 className='logo'>Movies R Us</h4></NavLink>

        <div className="nav-links">
            <Search />
            <div className = 'dropdown'>
               <button>Movies</button>
               <NavList />
            </div>
       </div>       
    </nav>

    )
}

export default withRouter(Navbar);