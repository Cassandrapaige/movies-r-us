import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';

/* COMPONENTS */
import Homepage from './pages/Homepage'
import Navbar from './components/navbar/navbar.component'
import Footer from './components/footer/footer.component'
import PopularView from './pages/PopularView'
import TopRatedView from './pages/TopRatedView'
import NowPlayingView from './pages/NowPlayingView'
import SearchView from './pages/SearchView'
import SimilarView from './pages/SimilarView'
import ShowMovie from './pages/individual-movie/individual-movie.component'
import ErrorHandler from './components/error-handler/error-handler.component'

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
