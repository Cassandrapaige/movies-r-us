import React from 'react'

import PaginationLink from '../pagination-link/pagination-link.component'

import './pagination.styles.scss'

const Pagination = ({pages, current, next}) => {
    let links = [];
    let paginationLinks;
    
    for(let i = 1; i <= pages; i++) {
        links.push(
            <PaginationLink 
            key = {i}
            i = {i}
            handleClick = {() => {next(i)}}
            current = {current}
            text = {i}
            />)
    }

    if(pages <= 5) {
        paginationLinks = links
    } else {
        paginationLinks = links.slice(0, 5)
    }

    let prevButton =  ( 
        <PaginationLink 
        handleClick = {() => next(current - 1)}
        current = {current}
        text = 'Prev'
        />)

    let nextButton = (  
        <PaginationLink 
        handleClick = {() => next(current + 1)}
        current = {current}
        text = 'Next'
        />)

    return (
            <div className="pagination">
                <ul>
                    {current > 1 && prevButton}

                    {paginationLinks}

                    {current > 5 && links[current-1]}

                    {current <= pages && nextButton} 
                </ul>
            </div>
    )
}
 
export default Pagination