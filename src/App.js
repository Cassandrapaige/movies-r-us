import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

/* COMPONENTS */
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PopularView from './components/PopularView'
import TopRatedView from './components/TopRatedView'
import NowPlayingView from './components/NowPlayingView'

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
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>

    );
  }


export default App;
