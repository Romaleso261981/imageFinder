import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { getTrendingMovies } from './services/API';
import { theme, darkTheme } from './utils/theme';
import { lazy, Suspense, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Louder } from './components/louder/Louder';
import { useFilter } from './hooks/filter';
import { useSort } from './hooks/sort';

const HomePage = lazy(() => import('./components/HomePage'));
const MoviesPage = lazy(() => import('./components/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./components/MovieDetailsPage'));

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const { enteredSearchValue, setEnteredSearchValue, availableItems } =
    useFilter(data, 'title');

  const { sortMode, setSortMode, sortedItems } = useSort(
    availableItems,
    'title',
  );

  useEffect(() => {
    getTrendingMovies(page).then(data => setData(data.results));
  }, [page]);

  const themeMode = theme;
  return (
    <ThemeProvider theme={themeMode}>
      <div className="App">
        <Navigation
          setEnteredSearchValue={setEnteredSearchValue}
          enteredSearchValue={enteredSearchValue}
          sortMode={setSortMode}
          setSortMode={setSortMode}
        />
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
                <MoviesPage
                  data={sortedItems ? sortedItems : data}
                  setPage={setPage}
                  page={page}
                  sortedItems={sortedItems}
                />
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
