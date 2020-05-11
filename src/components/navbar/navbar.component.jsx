import React, {useState, useEffect} from 'react'
import {withRouter, NavLink} from 'react-router-dom'

import './navbar.styles.scss'

import NavList from '../nav-list/nav-list.component'
import HamburgerMenu from '../hamburger-menu/hamburger-menu.component'
import GenreButton from '../genre-button/genre-button.component'
import Search from '../search-bar/search-bar.component'
import DropdownMenu from '../dropdown-menu/dropdown-menu.component'

const Navbar = ({history}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [expandSearch, setExpandSearch] = useState(false)
    const toggleClass = () => setIsOpen(!isOpen);

    return (
        <>
        <nav className = 'nav'>
            <div className = 'left-nav'>
                <NavLink to = '/'><h4 className='logo'>Movies R Us</h4></NavLink>
                <GenreButton />
            </div>
            <div className="nav-links">
                <HamburgerMenu isOpen = {isOpen} toggleClass= {toggleClass}/>
                <NavList />
                {
                    window.location.pathname !== '/' && 
                        <i className="fas fa-search" onClick={() => setExpandSearch(true)} ></i>
                }
            </div>  
            {expandSearch && <Search expand = {expandSearch} setExpandSearch = {setExpandSearch} handleClick = {() => setExpandSearch(false)}/>}   
        </nav>
         {isOpen &&
            <DropdownMenu setIsActive = {setIsOpen} setExpandSearch = {setIsOpen} isOpen = {isOpen} />
        }  
        </>
    )
}

export default withRouter(Navbar);