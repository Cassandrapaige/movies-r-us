import React from 'react'

import {API_KEY} from '../base'

import FetchMovie from '../components/fetch-movie/fetch-movie.component'

const SimilarView = ({history}) => {
    let query = history.location.search.slice(1);

    return (
        <div>
            <FetchMovie 
                title = {`Search results for '${query}'`}
                error = "Either something went wrong or that movie doesn't exist"
                url = {`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`} />
        </div>
    )
}

export default SimilarView
