import React from 'react'
import Movies from './Movies'

const TopRated = () => {
    return (
       <Movies 
            title= "Top Rated" 
            view="top_rated" 
            container="movieList" 
        />
    )
}

export default TopRated;