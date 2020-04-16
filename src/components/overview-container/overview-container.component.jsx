import React from 'react'

import StarRating from '../star-rating/star-rating.component';
import Substring from '../substring-text/substring-text.component'
import {DateString, GetYear} from '../date-string/date-string.component'

import './overview-container.styles.scss'

const OverviewContainer = ({movie}) => {
    return (
        <section className="about-movie">
            <h4 className = 'movie-title'>{movie.original_title}</h4>
            <DateString date = {movie.release_date} />
            {/* Only show year on mobile view */}
            <GetYear date = {movie.release_date} />
            <StarRating movie = {movie} />
            <Substring text = {movie.overview} />
        </section>
    )
}

export default OverviewContainer
