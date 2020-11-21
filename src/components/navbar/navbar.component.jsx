import React, {useState} from 'react'
import {withRouter, NavLink} from 'react-router-dom'

import './navbar.styles.scss'

import NavList from '../nav-list/nav-list.component'
import HamburgerMenu from '../hamburger-menu/hamburger-menu.component'
import GenreButton from '../genre-button/genre-button.component'
import Search from '../search-bar/search-bar.component'
import DropdownMenu from '../dropdown-menu/dropdown-menu.component'

import { useAppContext } from '../../providers/app.provider'

const Navbar = ({history}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [expandSearch, setExpandSearch] = useState(false)
    const [{total}, dispatch] = useAppContext();
    
    const toggleClass = () => setIsOpen(!isOpen);

    const handleClick = () => {
       dispatch({
            type: "INCREASE_TOTAL"
        })
    }
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
                <button onClick = {() => handleClick()}>Total: {total}</button>
            </div>  
            {expandSearch && <Search expand = {expandSearch} setExpandSearch = {setExpandSearch} handleClick = {() => setExpandSearch(false)}/>}   
        </nav>
        <DropdownMenu 
            setIsActive = {setIsOpen} 
            setExpandSearch = {setIsOpen} 
            isOpen = {isOpen} />
        </>
    )
}

export default withRouter(Navbar);