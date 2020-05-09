import React from 'react'
import {Route} from 'react-router-dom'

import {API_KEY} from '../../base'

import MovieView from '../../components/movie-view/movie-view.component'
import withVideo from '../../withVideo'

const MoviesPage = ({action}) => {
    return (
        <div>
            <Route 
            exact path= '/movies/popular' 
            render = {() => 
            <MovieView
                action = {action}
                url = {`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`}
                title = 'Most Popular'
                />} 
            />
            <Route 
            exact path= '/movies/top-rated' 
            render = {() => 
            <MovieView
                action = {action}
                url = {`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`}
                title = 'Top Rated'
                />} 
            />
            <Route 
            exact path= '/movies/new' 
            render = {() => 
            <MovieView
                action = {action}
                url = {`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`}
                title = 'Now Playing'
                />} 
            />
        </div>
    )
}

export default withVideo(MoviesPage);