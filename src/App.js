import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

/* COMPONENTS */
import Header from './components/Header'
import Popular from './components/Popular'

const App = () => {
    return (
      <BrowserRouter>
      <div className="container">
        <Header />
        <Popular />
      </div>
      </BrowserRouter>

    );
  }


export default App;
