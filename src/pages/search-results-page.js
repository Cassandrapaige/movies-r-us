import React from 'react'
import * as QueryString from "query-string"

import {API_KEY} from '../base'

import FetchedResults from '../components/fetched-results/fetched-results.component'

import withVideo from '../withVideo'

const SearchResults = ({action, location}) => {
    const params = QueryString.parse(location.search);
    const query = params.q;

    return (
        <FetchedResults 
            action = {action}
            title = {`Search results for '${query}'`}
            error = "Either something went wrong or that movie doesn't exist"
            url = {`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`} />
    )
}

export default withVideo(SearchResults)
