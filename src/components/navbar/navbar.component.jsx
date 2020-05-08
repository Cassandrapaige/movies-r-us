import React, {useState} from 'react'
import {withRouter, NavLink} from 'react-router-dom'

import './navbar.styles.scss'

import NavList from '../nav-list/nav-list.component'
import HamburgerMenu from '../hamburger-menu/hamburger-menu.component'
import GenreButton from '../genre-button/genre-button.component'
import Search from '../search-bar/search-bar.component'

const Navbar = ({history}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isActive, setIsActive] = useState(false)

    const toggleClass = () => {
        setIsOpen(!isOpen);
        setIsActive(!isActive)
    }
    
    return (
        <nav className = 'nav'>
            <div className = 'left-nav'>
                <NavLink to = '/'><h4 className='logo'>Movies R Us</h4></NavLink>
                <GenreButton />
            </div>
        <div className="nav-links">
            <HamburgerMenu isOpen = {isOpen} toggleClass= {toggleClass}/>
            <NavList />
            {window.location.pathname !== '/' && <i class="fas fa-search"></i>}
       </div>       
    </nav>
    )
}

export default withRouter(Navbar);