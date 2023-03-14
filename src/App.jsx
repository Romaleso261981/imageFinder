import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from './components/Navigation';
import { getTrendingMovies } from './services/API';
import { theme, darkTheme } from './utils/theme';
import { selectIsLoggedIn } from './redux/auth/selectors';
import { lazy, Suspense, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Louder } from './components/louder/Louder';
import { useFilter } from './hooks/filter';
import { useSort } from './hooks/sort';

const LoginPage = lazy(() => import('./components/pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() =>
  import('./components/pages/RegisterPage/RegisterPage'),
);
const MoviesPage = lazy(() =>
  import('./components/pages/MoviesPage/MoviesPage'),
);
const MovieDetailsPage = lazy(() =>
  import('./components/pages/MovieDetailsPage/MovieDetailsPage'),
);

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const { enteredSearchValue, setEnteredSearchValue, availableItems } =
    useFilter(data, 'title');

  const { sortMode, setSortMode, sortedItems } = useSort(
    availableItems,
    'title',
  );

  useEffect(() => {
    getTrendingMovies(page).then(data => setData(data.results));
  }, [page]);

  const PrivateRoute = ({ children, isLoggedIn }) => {
    console.log(isLoggedIn);
    return isLoggedIn ? children : <Navigate to="/" />;
  };

  const PublicRoute = ({ children, isLoggedIn }) => {
    return isLoggedIn ? children : <Navigate to="/register" />;
  };

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
                <PublicRoute isLoggedIn={!isLoggedIn}>
                  <LoginPage />
                </PublicRoute>
              </Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <Suspense fallback={<Louder />}>
                <PublicRoute isLoggedIn={!isLoggedIn}>
                  <RegisterPage />
                </PublicRoute>
              </Suspense>
            }
          />
          <Route
            path="/movies"
            element={
              <Suspense fallback={<Louder />}>
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <MoviesPage
                    data={sortedItems ? sortedItems : data}
                    setPage={setPage}
                    page={page}
                    sortedItems={sortedItems}
                  />
                </PrivateRoute>
              </Suspense>
            }
          />
          <Route
            path="/movies/:movieId"
            element={
              <Suspense fallback={<Louder />}>
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <MovieDetailsPage />
                </PrivateRoute>
              </Suspense>
            }
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
