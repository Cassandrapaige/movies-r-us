import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import * as QueryString from "query-string"

import Pagination from '../pagination/pagination.component'
import MovieView from '../movie-view/movie-view.component'
import ErrorMessage from '../error-message/error-message.component'
import BackButton from '../back-button/back-button.component'

const FetchedResults = ({url, genre, error, location, history, match, path, ...props}) => {
    const params = QueryString.parse(location.search);
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [current, setCurrent] = useState(1);
    const [total, setTotal] = useState()     

    const joinQuery = query => query.replace(/-/g,'&').split(' ').join('&').toLowerCase();

    useEffect(() => {
        if(location.pathname === "/search") setCurrent(Number(params.page));
        else setCurrent(Number(match.params.page.match(/\d+/)[0]))
    }, [location.pathname]);

    const fetchResults = useCallback(async () => {
        const result = await axios.get(`${url}&page=${current}`);
        setMovies(result.data.results)
        const total_results = await result.data.total_results;
        setTotal(total_results);
        setIsLoading(false);
    }, [current, url]);

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsLoading(true);
        fetchResults();
    },[fetchResults])
  
    const next = num => {
        let routeUrl;

        if(location.pathname === "/search") {
            routeUrl = `${joinQuery(location.pathname)}${location.search}`;
        } else routeUrl = location.pathname;

        const newRoute = routeUrl.slice(0, routeUrl.lastIndexOf("&"));
        setCurrent(num);
        history.push(`${newRoute}&page=${num}`);
    }

    const numPages = Math.floor(total / 20)

    return (
        total !== 0 || undefined ? 
            <MovieView 
                movies = {movies} 
                isLoading = {isLoading} 
                total = {total} 
                subtext = "Click on an image to read more or see movies that are similar"
                {...props}>
                {total > 20 &&
                <Pagination pages= {numPages} next={next} current = {current}/> }
            </MovieView>
            :
            <ErrorMessage error = {error}> 
                <BackButton />
            </ErrorMessage>
    )
}         
    
export default withRouter(FetchedResults);