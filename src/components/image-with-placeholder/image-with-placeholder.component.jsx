import React from 'react'

import placeholder from '../../images/placeholder.png'

import './image-with-placeholder.styles.scss'

const ImageWithPlaceholder = ({movie, isBackdrop}) => {
    return (
         (isBackdrop && movie.backdrop_path !== null) || movie.poster_path !== null ? 
            <img 
                src={`https://image.tmdb.org/t/p/w500/${isBackdrop ? movie.backdrop_path : movie.poster_path}`} 
                className='image-with-placeholder' 
                alt={movie.original_title}
                />
            : <img 
                src={placeholder} 
                className='image-with-placeholder'
                alt={movie.original_title}
                />
    )
}

export default ImageWithPlaceholder
