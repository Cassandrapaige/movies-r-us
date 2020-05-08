import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import {API_KEY} from '../../base'
import MovieView from '../movie-view/movie-view.component'
import GenreListsContainer from '../genre-lists-container/genre-lists-container.component'
import MovieDetails from '../movie-details/movie-details.component'

import Video from '../video/video.component'
const ContainerWithVideo = ({genreListsContainer, movieView, movieDetails, match, ...props}) => {
    const [video, setVideo] = useState()
    const [isOpen, setIsOpen] = useState(false)
    let container;

    const fetchVideo = id => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
        .then(result => {
            setVideo(result.data.results[0].key)
            setIsOpen(true)
        },(error => console.log(error)))
    } 

    console.log(video)

    if(genreListsContainer) {
        container = <GenreListsContainer action = {fetchVideo} {...props}/>
    }

    if(movieView) {
        container = <MovieView action = {fetchVideo} video = {video} {...props}/>
    }

    if(movieDetails) {
        container = <MovieDetails action = {fetchVideo} video = {video} {...props} />
    }

    return (
        <div>
            {container}
            {
                isOpen &&
                <Video video = {video} toggleView = {() => setIsOpen(!isOpen)}/>
            }
        </div>
    )
}

export default withRouter(ContainerWithVideo)