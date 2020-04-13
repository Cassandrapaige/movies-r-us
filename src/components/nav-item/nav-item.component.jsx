import React, { Fragment, useState } from 'react'
import {useSpring, animated, config } from 'react-spring'

import './nav-item.styles.scss'

const NavItem = ({text, link}) => {
    const [ onHover, setOnHover] = useState(false);

    const props = useSpring({
        from: {
            color: '#fff',
            fontSize: '40px',
            opacity: 0,
        },
        config: config.wobbly,
        to: {
            color: onHover ? '#1db3ae' : '#fff',
            fontSize: onHover ? '45px' : '40px',
            paddingRight: onHover ? '10px' : '0px',
            opacity: 1
        }
    })
    
    const handleMouseOver = event => {
        setOnHover(true)
    }

    const handleMouseLeave = event => {
        setOnHover(false)
    }

    return (
            <animated.a href = {link}
                className='nav-link'
                style = {props} 
                onMouseOver = {handleMouseOver} 
                onMouseLeave = {handleMouseLeave}>
                {text}
            </animated.a>
    )
}

export default NavItem