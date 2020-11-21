import React from 'react'

import {useAppContext} from '../providers/app.provider'

import MovieView from '../components/movie-view/movie-view.component';
import useLocalState from '../hooks/useLocalState'

const FavouritesPage = ({...props}) => {
    useLocalState();

    const [{total, favourites}] = useAppContext();

    return (   
        <MovieView 
            title = "Favourites" 
            subtext = "These are you favourite movies" 
            movies = {favourites} 
            total = {total} 
            data = {favourites}
            {...props}
        />
    )
}

export default FavouritesPage;