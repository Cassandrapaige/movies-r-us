import React from 'react'
import {animated, useSpring, config, useTransition} from 'react-spring'

import NavItem from '../nav-item/nav-item.component'

import './nav-list.styles.scss'

const NavList = ({active, children}) => {

    const props = useSpring({
        from : {
            width: '0%',
        },
        to: {
            width: active ? '100%' : '0%',
        },
        config: config.wobbly
    })
    
    return (
        <animated.div className = 'nav-list' style = {props}>
            <NavItem text = 'Now Playing' link='/new' />
            <NavItem text = 'Most Popular' link='/popular' />
            <NavItem text = 'Top Rated' link='/top-rated'/>

           {children}
        </animated.div>
    )
}

export default NavList