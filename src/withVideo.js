import React, {useState} from 'react'
import axios from 'axios'

import {API_KEY} from './base'

import Video from './components/video/video.component'

const withVideo = (WrappedComponent) => {
    const WithVideo = ({match, ...props}) => {
        const [video, setVideo] = useState()
        const [isOpen, setIsOpen] = useState(false)
    
        const fetchVideo = id => {
            if(id !== undefined) 
            axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
            .then(result => {
                setVideo(result.data.results[0].key);
                setIsOpen(true);
            },(error => console.log(error)))
        } 

    return (
        <div>
            <WrappedComponent action = {fetchVideo} video = {video} {...props} />
            {
                isOpen && <Video video = {video} toggleView = {() => setIsOpen(false)}/>
            }
        </div>
    )
}
    return WithVideo;
}

export default withVideo