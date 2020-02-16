import React, { Fragment } from 'react'

const Pagination = props => {
    let links = [];
    let display = [];

    for(let i = 1; i <= props.pages; i++) {
        let active = props.current === i ? 'active' : '';
        links.push(<li className = {`pageLinks ${active}`} key={i} onClick={() => props.next(i)}>
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
                    { props.current > 1 ? 
                    <li className= 'pageLinks' 
                        onClick={() => props.next(props.current - 1)}>
                    <a href="#">Prev</a></li> : '' }

                    { props.pages <= 5 ? {links} : <> {display} </> }
                    { props.current > 5 ? links[props.current-1] : '' }

                    { props.current <= props.pages ? 
                    <li className= 'pageLinks' 
                        onClick={() => props.next(props.current + 1)}>
                    <a href="#">Next</a></li> : '' } 
                </ul>
            </div>
        </div> 
    )
}

export default Pagination;