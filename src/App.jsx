import './App.css';
import {
  Route,
  Routes,
  Navigate,
  useSearchParams,
  useNavigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { theme } from './utils/theme';
import { selectAccessToken } from './redux/auth/selectors';
import { refreshUser } from './redux/auth/operations';
import { getLang } from './redux/theme/themeSelector';
import { getTrendingMovies } from './services/API';
import { getMode } from './redux/theme/themeSelector';
import { lazy, Suspense, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Louder } from './components/louder/Louder';
import { useFilter } from './hooks/filter';
import { useSort } from './hooks/sort';

const Layout = lazy(() => import('./components/Layout/Layout'));
const LoginPage = lazy(() => import('./components/pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() =>
  import('./components/pages/RegisterPage/RegisterPage'),
);
const Movies = lazy(() => import('./components/pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('./components/pages/MovieDetailsPage/MovieDetailsPage'),
);

const PrivateRoute = ({ children, token }) => {
  return token ? children : <Navigate to="/" />;
};

const PublicRoute = ({ children, token }) => {
  return !token ? children : <Navigate to="/Movies" />;
};

export function App() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isHintShown, setIsHintShown] = useState(false);
  // const token = useSelector(selectAccessToken);
  const token = true;
  const selectedMode = useSelector(getMode);
  const themeMode = selectedMode.mode === 'light' ? darkTheme : theme;

  // const { enteredSearchValue, setEnteredSearchValue, availableItems } =
  //   useFilter(data, 'title');

  // const { sortMode, setSortMode, sortedItems } = useSort(
  //   availableItems,
  //   'title',
  // );

  useEffect(() => {
    if (!token) {
      setIsHintShown(false);
      return;
    }
    dispatch(refreshUser());
    getTrendingMovies(page).then(data => setData(data.results));
    // eslint-disable-next-line/exhaustive-deps
  }, [dispatch, page]);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('useEffectApp');
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');
    const sid = searchParams.get('sid');
    if (!accessToken) return;
    dispatch(googleAuthUser({ accessToken, refreshToken, sid }));
    navigate('/wallet');
  }, [searchParams, dispatch, navigate]);

  return (
    <ThemeProvider theme={themeMode}>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Louder />}>
              <Layout data={data} />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<Louder />}>
                <PublicRoute token={token}>
                  <LoginPage />
                </PublicRoute>
              </Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <Suspense fallback={<Louder />}>
                <PublicRoute token={token}>
                  <RegisterPage />
                </PublicRoute>
              </Suspense>
            }
          />
          <Route
            path="/Movies"
            element={
              <Suspense fallback={<Louder />}>
                <PrivateRoute token={token}>
                  <Movies data={data} />
                </PrivateRoute>
              </Suspense>
            }
          />
          <Route
            path="/Movies/:id"
            element={
              <Suspense fallback={<Louder />}>
                <PrivateRoute token={token}>
                  <MovieDetailsPage />
                </PrivateRoute>
              </Suspense>
            }
          />
          <Route path="*" element={<h1>Невірно прописаний шлях</h1>} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
export default App;
