import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom'

import PlayButton from '../play-button/play-button.component'
import ImageWithPlaceholder from '../image-with-placeholder/image-with-placeholder.component';
import Spinner from '../spinner/spinner.component'
import OverviewContainer from '../overview-container/overview-container.component'
import CardContainer from '../card-container/card-container.component'

import './movie-list.styles.scss'

const MovieList = ({movies, action, isLoading}) => {
return (
    <section className="grid-container">
    {isLoading ? <Spinner /> :
        <>{movies.map(movie => 
            <CardContainer key={movie.id}>
                <div className="top-image">
                    <NavLink to ={`/movie/` + movie.id}> 
                        <ImageWithPlaceholder movie = {movie}/>
                    </NavLink>
                    <PlayButton id = {movie.id} action = {action} />
                </div>    

                <OverviewContainer movie = {movie}/>

                <NavLink to = {`/movie/${movie.id}`} className='movie-link'>
                    See more<i className ="fas fa-arrow-right sm-arrow"></i>
                </NavLink>      
            </CardContainer>
        )}</>}
        </section>
)}

export default MovieList;
