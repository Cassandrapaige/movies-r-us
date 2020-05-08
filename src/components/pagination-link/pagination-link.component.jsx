import React from 'react'

import './pagination-links.styles.scss'

const PaginationLink = ({handleClick, text, current, i}) => (
    <li 
        className = {`pageLinks ${i && current === i && 'active'}`}  
        onClick={handleClick}>
        {text}
    </li> 
)

export default PaginationLink