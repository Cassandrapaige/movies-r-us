import React, { Fragment } from 'react'

import './pagination.styles.scss'

const Pagination = ({pages, current, next}) => {
    let links = [];
    let display = [];

    for(let i = 1; i <= pages; i++) {
        links.push(
            <li className = {`pageLinks ${current === i ? 'active' : ''}`} 
                key={i} 
                onClick={() => next(i)}>
                {i}
            </li>)
    }

    for(let i = 0; i < 5; i++) {
        display.push(links[i]);
    }

    return (
            <div className="pagination">
                <ul>{ current > 1 && 
                    <li className= 'pageLinks' 
                        onClick={() => next(current - 1)}>
                        Prev
                    </li> }

                    { pages <= 5 ? {links} : <> {display} </> }
                    { current > 5 ? links[current-1] : '' }

                    { current <= pages &&
                    <li 
                        className= 'pageLinks' 
                        onClick={() => next(current + 1)}>
                        Next
                    </li> } 
                </ul>
            </div>
    )
}

export default Pagination;