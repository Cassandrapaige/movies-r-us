import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';

/* COMPONENTS */
import Homepage from './components/homepage/Homepage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PopularView from './components/views/PopularView'
import TopRatedView from './components/views/TopRatedView'
import NowPlayingView from './components/views/NowPlayingView'
import SearchView from './components/views/SearchView'
import SimilarView from './components/views/SimilarView'
import ShowMovie from './components/ShowMovie'
import ErrorHandler from './components/ErrorHandler'

const App = () => {

    return (
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path = '/' component = { Homepage } />
            <Route exact path= '/popular' component = { PopularView } />
            <Route exact path= '/top-rated' component = { TopRatedView } />
            <Route exact path= '/new' component = { NowPlayingView } />
             <Route exact path= '/search' component = { SearchView} />
             <ErrorHandler>
              <Route exact path= '/similar/:movie_id' component = { SimilarView } />
              <Route exact path= '/:movie_id' component = { ShowMovie } />
            </ErrorHandler>

          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }


export default App;
