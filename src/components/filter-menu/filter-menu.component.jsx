import React from 'react'

import './filter-menu.styles.scss'

const FilterMenu = ({children}) => {
    return (
        <div className = 'filter-menu'>
            {children}
            <div className = 'filter-card'>
                <div className="title">
                    <h3 className="title">Sort</h3>
                </div>
                <div className="list">
                    <h4>Sort Results By</h4>
                    <div className="dropdown">
                        <div className="active-block">Rating Descending 
                            <span className = 'arrow'>▼</span>
                        </div>
                        <ul>
                            <li className="dropdown-item">Rating Descending</li>
                            <li className="dropdown-item">Rating Ascending</li>
                            <li className="dropdown-item">Release Date Descending</li>
                            <li className="dropdown-item">Release Date Ascending</li>
                            <li className="dropdown-item">Title (A-Z)</li>
                            <li className="dropdown-item">Title (Z-A)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterMenu