import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.scss";

/* COMPONENTS */
import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";
import ErrorHandler from "./components/error-handler/error-handler.component";
import Spinner from "./components/spinner/spinner.component";

import { AppStateProvider } from "./providers/app.provider";

const Homepage = lazy(() => import("./pages/homepage"));
const SearchView = lazy(() => import("./pages/search-results-page"));
const SimilarView = lazy(() => import("./pages/similar-movies-page"));
const MoviesPage = lazy(() => import("./pages/movies-page.component"));
const GenrePage = lazy(() => import("./pages/genre-page.component"));
const MovieDetailsPage = lazy(() => import("./pages/movie-details-page"));
const FavouritesPage = lazy(() => import("./pages/favourites-page"));

const App = () => {
  return (
    <AppStateProvider>
      <BrowserRouter>
        <div className='container'>
          <Navbar />
          <Switch>
            <ErrorHandler>
              <Suspense fallback={<Spinner />}>
                <Route exact path='/' component={Homepage} />
                <Route path='/search' component={SearchView} />
                <Route path='/movies' component={MoviesPage} />
                <Route exact path='/favourites' component={FavouritesPage} />
                <Route
                  exact
                  path='/movies&genre=:genre&id=:id&page=:page'
                  component={GenrePage}
                />
                <Route
                  exact
                  path='/similar/:movie_id&:page'
                  component={SimilarView}
                />
                <Route
                  exact
                  path='/movie/:movie_id'
                  component={MovieDetailsPage}
                />
              </Suspense>
            </ErrorHandler>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </AppStateProvider>
  );
};

export default App;
