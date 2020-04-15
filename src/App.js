import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.scss';

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

export const stringDate = date => {
  let splitDate = String(date).split('-')
  let year = splitDate[0];
  let month = Number(splitDate[1]);
  let day = splitDate[2];
  const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
  return `${months[month -1]} ${day} ${year}`
}

const App = ({query}) => {

    return (
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Switch>
              <Route exact path = '/' component = { Homepage } />
              <Route exact path= '/popular' component = { PopularView } />
              <Route exact path= '/top-rated' component = { TopRatedView } />
              <Route exact path= '/new' component = { NowPlayingView } />
              <ErrorHandler>
                <Route exact path= '/search' component = { SearchView} />
                <Route exact path= '/similar/:movie_id' component = { SimilarView } />
                <Route exact path= '/movie/:movie_id' component = { ShowMovie } />
            </ErrorHandler>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }


export default App
