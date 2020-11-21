import React from 'react'

import {useAppContext} from '../providers/app.provider'

import MovieOverview from '../components/movie-overview-container/movie-overview-container.component'
import MovieView from '../components/movie-view/movie-view.component';

const FavouritesPage = ({...props}) => {
    const [{total, favourites}, dispatch] = useAppContext();

    return (   
        <MovieView title = "Favourites" subtext = "These are you favourite movies" movies = {favourites} total = {total} />
    )
}

export default FavouritesPage;