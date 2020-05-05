import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import {API_KEY} from './base'

import './App.scss';

/* COMPONENTS */
import Navbar from './components/navbar/navbar.component'
import Footer from './components/footer/footer.component'
import ErrorHandler from './components/error-handler/error-handler.component'

import Homepage from './pages/homepage'
import SearchView from './pages/search-results-page'
import SimilarView from './pages/similar-movies-page'
import ShowMovie from './pages/individual-movie-page/individual-movie.component'
import MoviesPage from './pages/movies-page/movies-page.component';

const App = () => {
    return (
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Switch>
            <ErrorHandler>
              <Route exact path = '/' component = { Homepage } />
              <Route path= '/search' component = { SearchView} />
              <Route path = '/movies' render = {() => <MoviesPage/>} />
              <Route exact path= '/similar/:movie_id' component = {SimilarView} />
              <Route exact path= '/movie/:movie_id' component = { ShowMovie } />
            </ErrorHandler>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }


export default App
