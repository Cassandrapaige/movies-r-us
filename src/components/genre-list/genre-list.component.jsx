import React, {useState, useEffect} from 'react'

import GenreItems from '../genre-items/genre-items.component'

const GenreList = ({data}) => {
    return (
       <GenreItems genres = {data.genres}/>
    )
}

export default GenreList