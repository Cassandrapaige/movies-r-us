import React from 'react'

import placeholder from '../../images/placeholder.png'

import './image-with-placeholder.styles.scss'

const ImageWithPlaceholder = ({movie, active, isBackdrop}) => {
    return (
        <>{ movie.poster_path && movie.backdrop_path !== null ? 
            <img 
                src={`https://image.tmdb.org/t/p/w500/${isBackdrop ? movie.backdrop_path : movie.poster_path}`} 
                className='image-with-placeholder' 
                alt={movie.original_title}
                style = {{opacity: `${active ? '0.5' : '1'}`}}
                />
            : <img 
                src={placeholder} 
                className='image-with-placeholder'
                alt={movie.original_title}
                style = {{opacity: `${active ? '0.5' : '1'}`, height: `${isBackdrop ? '130px' : 'auto'}`}}
                />}</>
    )
}

export default ImageWithPlaceholder
