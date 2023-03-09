import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { lazy, Suspense } from 'react';
import Notiflix from 'notiflix';
// import { Audio } from 'react-loader-spinner';

const HomePage = lazy(() =>
  import('./components/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./components/MoviesPage' /* webpackChunkName: "movie-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './components/MovieDetailsPage' /* webpackChunkName: "movie-details" */
  ),
);
const Reviews = lazy(() =>
  import('./components/Reviews' /* webpackChunkName: "Reviews" */),
);
const Cast = lazy(() =>
  import('./components/Cast' /* webpackChunkName: "Cast" */),
);

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/movies"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <MoviesPage />
            </Suspense>
          }
        />

        <Route
          path="/movies/:movieId"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <MovieDetailsPage />
            </Suspense>
          }
        />
        {/* <Route
            path="/movies/:movieId/cast"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Cast />
              </Suspense>
            }
          /> */}
        {/* <Route
            path="/movies/:movieId/reviews"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Reviews />
              </Suspense>
            }
          />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
