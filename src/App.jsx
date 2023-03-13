import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { getTrendingMovies } from './services/API';
import { theme, darkTheme } from './utils/theme';
import { lazy, Suspense, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
// import Notiflix from 'notiflix';
import { Louder } from './components/louder/Louder';

const HomePage = lazy(() => import('./components/HomePage'));
const MoviesPage = lazy(() => import('./components/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./components/MovieDetailsPage'));

function App() {
  // const selectedMode = useSelector(getMode);
  //  const themeMode = selectedMode.mode === 'light' ? darkTheme : theme;
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getTrendingMovies(page).then(data => setData(data.results));
  }, [page]);

  const themeMode = theme;
  return (
    <ThemeProvider theme={themeMode}>
      <div className="App">
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Louder />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/movies"
            element={
              <Suspense fallback={<Louder />}>
                <MoviesPage data={data} setPage={setPage} page={page} />
              </Suspense>
            }
          />

          <Route
            path="/movies/:movieId"
            element={
              <Suspense fallback={<Louder />}>
                <MovieDetailsPage />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
