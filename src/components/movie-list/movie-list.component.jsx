import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom'

import PlayButton from '../play-button/play-button.component'
import ImageWithPlaceholder from '../image-with-placeholder/image-with-placeholder.component';
import Spinner from '../spinner/spinner.component'
import OverviewContainer from '../overview-container/overview-container.component'
import GridContainer from '../grid-container/grid-container.component'
import FlexContainer from '../flex-container/flex-container.component'

import './movie-list.styles.scss'

const MovieList = ({movies, action, isLoading}) => {
return (
<div className='movie-list'>   
    {isLoading ? <Spinner /> :
    <GridContainer>
        {movies.map(movie => 
            <FlexContainer key={movie.id}>    
                <NavLink to ={`/movie/` + movie.id}> 
                    <ImageWithPlaceholder movie = {movie}/>
                </NavLink>

                <PlayButton id = {movie.id} action = {action} />
                <OverviewContainer movie = {movie}/>

                <NavLink to = {`/movie/${movie.id}`} className='movie-link'>
                    See more<i className ="fas fa-arrow-right sm-arrow"></i>
                </NavLink>      
            </FlexContainer>
        )}
        </GridContainer>
    }
</div>
)}

export default MovieList;
