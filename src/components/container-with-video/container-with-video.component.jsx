import React, {useState} from 'react'
import axios from 'axios'
import {API_KEY} from '../../base'
import MovieView from '../movie-view/movie-view.component'
import ScrollingListContainer from '../scrolling-list-container/scrolling-list-container.component'

import Video from '../video/video.component'
const ContainerWithVideo = ({scrollingListContainer, movieView, ...props}) => {
    const [video, setVideo] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    const fetchVideo = id => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
        .then(result => {
            setVideo(result.data.results[0].key)
            setIsOpen(true)
        },(error => console.log(error)))
    } 

    let container;
    if(scrollingListContainer) {
        container = <ScrollingListContainer action = {fetchVideo} {...props}/>
    }

    if(movieView) {
        container = <MovieView action = {fetchVideo} {...props}/>
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

export default ContainerWithVideo