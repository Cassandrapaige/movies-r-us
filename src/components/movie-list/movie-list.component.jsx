import React, { Fragment } from 'react';
import StarRating from '../star-rating/star-rating.component';
import { NavLink } from 'react-router-dom'

import placeholder from '../../images/placeholder.png';
import PlayButton from '../play-button/play-button.component'
import Substring from '../substring-text/substring-text.component'
import ImageWithPlaceholder from '../image-with-placeholder/image-with-placeholder.component';

import {DateString, GetYear} from '../date-string/date-string.component'
import OverviewContainer from '../overview-container/overview-container.component'
import GridContainer from '../grid-container/grid-container.component'
import FlexContainer from '../flex-container/flex-container.component'

import './movie-list.styles.scss'

const MovieList = ({movies, playVideo, video}) => {

return (
<GridContainer>
{movies.map(movie => 
    <FlexContainer key={movie.id}>    
        <NavLink to ={`/movie/` + movie.id}> 
            <ImageWithPlaceholder movie = {movie}/>
        </NavLink>

        {video ?    
           <PlayButton id = {movie.id} action = {playVideo}/> : '' }

        <NavLink to ={`/movie/` + movie.id}> 
            <OverviewContainer>
                <h4 className = 'movie-title'>{movie.original_title}</h4>
                <DateString date = {movie.release_date} />
                <GetYear date = {movie.release_date} />
                <StarRating movie = {movie} />
                <Substring text = {movie.overview} />
            </OverviewContainer>
        </NavLink>

        <NavLink to = {`/movie/${movie.id}`} className='movie-link'>
            See more<i className ="fas fa-arrow-right sm-arrow"></i>
        </NavLink>      
    </FlexContainer>
)}
</GridContainer>
)}


export default MovieList;
