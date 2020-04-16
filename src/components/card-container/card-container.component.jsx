import React from 'react'

import './card-container.styles.scss'

const CardContainer = ({children, id}) => {
    return (
        <div className = 'movie' key = {id}>
            {children}
        </div>
    )
}

export default CardContainer