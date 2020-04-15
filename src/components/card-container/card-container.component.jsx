import React from 'react'

const CardContainer = ({children, id}) => {
    return (
        <div className = 'movie' key = {id}>
            {children}
        </div>
    )
}

export default CardContainer