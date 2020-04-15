import React from 'react'

import './flex-container.styles.scss'

const FlexContainer = ({children}) => {
    return (
        <section className="movie">
            {children}
        </section>
    )
}

export default FlexContainer