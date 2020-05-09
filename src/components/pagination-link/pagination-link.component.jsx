import React from 'react'

import {NavLink, withRouter} from 'react-router-dom'

import './pagination-links.styles.scss'

const PaginationLink = ({handleClick, id, text, current, i}) => (
    <NavLink to ={`/similar/${id}&page=${i}`} 
        className = {`pageLinks ${i && current === i && 'active'}`}  
        onClick={handleClick}>
        {text}
    </NavLink> 
)

export default PaginationLink