import React from 'react'

import {useAppContext} from '../providers/app.provider'

import MovieView from '../components/movie-view/movie-view.component';
import useLocalState from '../hooks/useLocalState'

const FavouritesPage = ({...props}) => {
    useLocalState();

    const [{total, favourites}] = useAppContext();

    return (   
        <MovieView 
            title = "My Watchlist 👁️‍🗨️"
            subtext = {`${total < 1 ? "You haven't saved any movies yet!" : "Click on an image to see movies that are similar or remove item from your watchlist"}`} 
            movies = {favourites} 
            total = {total} 
            data = {favourites}
            {...props}
        />
    )
}

export default FavouritesPage;