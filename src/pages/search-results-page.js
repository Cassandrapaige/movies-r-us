import React from 'react'

import {API_KEY} from '../base'

import MovieView from '../components/movie-view/movie-view.component'

import withVideo from '../withVideo'

const SearchResults = ({action, history, match}) => {
    let query = history.location.search.slice(1);
    let title = query.replace(/&/g, ' ')
    
    return (
        <MovieView 
            action = {action}
            title = {`Search results for '${title}'`}
            error = "Either something went wrong or that movie doesn't exist"
            url = {`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`} />
    )
}

export default withVideo(SearchResults)
