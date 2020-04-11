import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Search from '../search-bar/search-bar.component'

import './navbar.styles.scss'
const joinQuery = query => query.split(' ').join('&');

const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [value, setValue] = useState('')
    const [isVisible, setIsVisible] = useState(false)

    const toggleClass = () => setIsOpen(!isOpen)

    const handleSubmit = event => {
        event.preventDefault()
        props.history.push({
            pathname: '/search',
            search: joinQuery(value)
        })
        setValue('')
        setIsOpen(!isOpen)
        window.location.reload()
    }

    const handleChange = event => setValue(event.target.value)

    const toggleSearch = () => setIsVisible(!isVisible)

    return (
        <nav className='navbar'>
        <div className="hamburger_menu">
            <a href='#' onClick= {toggleClass}>
               {isOpen ? <i class="fas fa-times"></i> :
               <i className="fas fa-bars"></i>
               } </a>
        </div>
            <NavLink to= '/' className='navbar-brand'>Movies R Us</NavLink>
            <ul className="navbar-nav" id={isOpen ? "show" : null}>
                <li className="navbar-item" onClick= {toggleClass}>
                    <NavLink to= '/new' className='nav-link'>Now Playing</NavLink>
                </li>
                <li className="navbar-item" onClick= {toggleClass}>
                    <NavLink to= '/popular' className='nav-link'>Most Popular</NavLink>
                </li>
                <li className="navbar-item" onClick= {toggleClass}>
                    <NavLink to= '/top-rated' className='nav-link'>Top Rated</NavLink>
                </li>
                <li className="navbar-item">
                    <Search 
                        isVisible = {isVisible}
                        toggleSearch = {toggleSearch}
                        handleChange = {handleChange}
                        handleSubmit = {handleSubmit}
                        value = {value}
                    />
                </li>
            </ul>
        </nav>

    )}

export default withRouter(Navbar);