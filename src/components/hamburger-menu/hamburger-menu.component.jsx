import React from 'react'

import './hamburger-menu.styles.scss'

const HamburgerMenu = ({isOpen, toggleClass}) => {

    return (
         <div className = {isOpen ? 'open' : 'hamburger-menu'} onClick = {toggleClass}>
            <div  className = {isOpen ? 'open-top' : 'hamburger-menu-top'}/>
            <div className = {isOpen ? 'open-middle' : 'hamburger-menu-middle'}/>
            <div className = {isOpen ? 'open-bottom' : 'hamburger-menu-bottom'}/>
        </div>
    )
}

export default HamburgerMenu;