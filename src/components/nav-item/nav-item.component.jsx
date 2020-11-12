import React from 'react'

import { NavLink } from 'react-router-dom'

import './nav-item.styles.scss'

const NavItem = ({text, link, isDropdown, handleClick}) => (
        <NavLink
            to = {link} 
            onClick = {handleClick}
            className={`${isDropdown ? 'dropdown-link' : 'nav-link'}`} >
            {text}
        </NavLink>
    )

export default NavItem