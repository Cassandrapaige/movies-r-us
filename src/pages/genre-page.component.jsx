import React from 'react'
import {withRouter} from 'react-router-dom'

import {API_KEY} from '../base'

import {GENRE_DATA} from '../constants'

import withVideo from '../withVideo'

import FetchedResults from '../components/fetched-results/fetched-results.component'

const GenrePage = ({action, match}) => {
    const id = match.params.genre_id
    const title = Object.keys(GENRE_DATA).map(key => GENRE_DATA[id].genre)

    return (
        <FetchedResults
            action = {action}
            title = {title[0]}
            url = {`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}`} />
    )
}   

export default withVideo(withRouter(GenrePage))