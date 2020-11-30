import React from 'react'
import {Route} from 'react-router-dom'

import {API_KEY} from '../base'

import FetchedResults from '../components/fetched-results/fetched-results.component'
import withVideo from '../withVideo'

const MoviesPage = ({action}) => {
    return (
        <div>
            <Route 
            exact path= '/movies/popular/:page' 
            render = {() => 
                <FetchedResults
                    action = {action}
                    url = {`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`}
                    title = 'Most Popular'
                    path = '/movies/popular'
                />}
            />
            <Route 
            exact path= '/movies/top-rated/:page' 
            render = {() => 
                <FetchedResults
                    action = {action}
                    url = {`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`}
                    title = 'Top Rated'
                    path = '/movies/top-rated'
                />} 
            />
            <Route 
            exact path= '/movies/new/:page' 
            render = {() => 
                <FetchedResults
                    action = {action}
                    url = {`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`}
                    title = 'Now Playing'
                    path = '/movies/new'
                />} 
            />
        </div>
    )
}

export default withVideo(MoviesPage);