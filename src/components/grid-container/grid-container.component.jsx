import React from 'react'

import './grid-container.styles.scss'

const GridContainer = ({children}) => {
    return (
        <section className="grid-container">
            {children}
        </section>
    )
}

export default GridContainer
