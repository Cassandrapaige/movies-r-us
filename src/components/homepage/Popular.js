import React from 'react'
import Movies from './Movies'

const Popular = () => {
    return (
       <Movies 
            title= "Most Popular" 
            view="popular" 
            container="movieList" 
        />
    )
}

export default Popular;