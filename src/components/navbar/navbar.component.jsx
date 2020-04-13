import React, {useState} from 'react'
import {withRouter, NavLink} from 'react-router-dom'

import './navbar.styles.scss'

import NavList from '../nav-list/nav-list.component'
import Search from '../search-bar/search-bar.component'

const Navbar = ({history}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [value, setValue] = useState('')
    const [isVisible, setIsVisible] = useState(false)

    const joinQuery = query => query.split(' ').join('&');
    const toggleClass = () => setIsOpen(!isOpen)

    const handleSubmit = event => {
        event.preventDefault()
        history.push({
            pathname: '/search',
            search: joinQuery(value)
        })
        setValue('')
        setIsOpen(!isOpen)
        window.location.reload()
    }

    const handleChange = event => setValue(event.target.value)

    const toggleSearch = event => {
        setIsVisible(!isVisible)
        if(isVisible) event.target.blur();
    }

    return (
        <>
        <nav className = 'nav'>
        <NavLink to = '/'><h4 className='logo'>Movies R Us</h4></NavLink>
            <div className = {isOpen ? 'open' : 'hamburger-menu'} onClick = {toggleClass}>
                <div  className = {isOpen ? 'open-top' : 'hamburger-menu-top'}/>
                <div className = {isOpen ? 'open-middle' : 'hamburger-menu-middle'}/>
                <div className = {isOpen ? 'open-bottom' : 'hamburger-menu-bottom'}/>
            </div>
        </nav>

        {
            isOpen ? 
            <NavList active = {isOpen}>
                <Search 
                    isVisible = {isVisible}
                    toggleSearch = {toggleSearch}
                    handleChange = {handleChange}
                    handleSubmit = {handleSubmit}
                    value = {value}
                />
            </NavList>
            : null
        }
        </>
    )
}

export default withRouter(Navbar);