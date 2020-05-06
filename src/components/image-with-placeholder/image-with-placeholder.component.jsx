import React from 'react'

import placeholder from '../../images/placeholder.png'

const ImageWithPlaceholder = ({movie, active}) => {
    return (
        <>{ movie.poster_path !== null ? 
            <img 
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                className='movie-show-img' 
                alt={movie.original_title}
                style = {{opacity: `${active ? '0.5' : '1'}`}}
                />
            : <img 
                src={placeholder} 
                className='movie-show-img'
                alt={movie.original_title}
                style = {{opacity: `${active ? '0.5' : '1'}`}}
                />}</>
    )
}

export default ImageWithPlaceholder
