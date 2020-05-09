import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.scss';

/* COMPONENTS */
import Navbar from './components/navbar/navbar.component'
import Footer from './components/footer/footer.component'
import ErrorHandler from './components/error-handler/error-handler.component'

import Homepage from './pages/homepage'
import SearchView from './pages/search-results-page'
import SimilarView from './pages/similar-movies-page'
import MoviesPage from './pages/movies-page/movies-page.component';
import GenrePage from './pages/genre-page.component'
import MovieDetailsPage from './pages/movie-details-page'

const App = () => {
    return (
      <BrowserRouter>
        <div className="container">
          <Navbar/>
          <Switch>
            <ErrorHandler>
              <Route exact path = '/' component = { Homepage } />
              <Route path= '/search' component = { SearchView} />
              <Route path = '/movies' component = {MoviesPage} />
              <Route exact path= '/movies/genre/:genre_id' component = { GenrePage } />
              <Route exact path= '/similar/:movie_id' component = {SimilarView}/>
              <Route exact path= '/movie/:movie_id' component = { MovieDetailsPage } />
            </ErrorHandler>
          </Switch>
          </div>
        <Footer />
      </BrowserRouter>
    )
  }


export default App
