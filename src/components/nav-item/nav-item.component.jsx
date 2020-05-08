import React from 'react'

import './nav-item.styles.scss'

const NavItem = ({text, link}) => (
        <a href = {link} className='nav-link'>
            {text}
        </a>
    )

export default NavItem