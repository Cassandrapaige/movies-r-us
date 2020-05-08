import React from 'react'

import './nav-item.styles.scss'

const NavItem = ({text, link, isDropdown}) => (
        <a href = {link} className={`${isDropdown ? 'dropdown-link' : 'nav-link'}`}>
            {text}
        </a>
    )

export default NavItem