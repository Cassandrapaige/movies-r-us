import React, { Fragment } from 'react'

import './pagination.styles.scss'

const Pagination = ({pages, current, next}) => {
    let links = [];
    let display = [];

    for(let i = 1; i <= pages; i++) {
        links.push(<li className = {`pageLinks ${current === i ? 'active' : ''}`} key={i} onClick={() => next(i)}>
            <a href="#">{i}</a>
        </li>)
    }

    for(let i = 0; i < 5; i++) {
        display.push(links[i]);
    }

    return (
        <div className="container">
            <div className="row">
                <ul className="pagination">
                    { current > 1 ? 
                    <li className= 'pageLinks' 
                        onClick={() => next(current - 1)}>
                    <a href="#">Prev</a></li> : '' }

                    { pages <= 5 ? {links} : <> {display} </> }
                    { current > 5 ? links[current-1] : '' }

                    { current <= pages ? 
                    <li className= 'pageLinks' 
                        onClick={() => next(current + 1)}>
                    <a href="#">Next</a></li> : '' } 
                </ul>
            </div>
        </div> 
    )
}

export default Pagination;