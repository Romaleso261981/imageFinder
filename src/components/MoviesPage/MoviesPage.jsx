import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../services/API';
import MoviesList from '../MoviesList/MoviesList';
import { CardMovie } from '../MoviesList/CardMovie';
import styles from './MoviesPage.module.css';

function HomePage() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const { pathname, search } = useLocation();
  const currenUrl = `${pathname}${search}`;

  useEffect(() => {
    getTrendingMovies(page).then(data => setData(data.results));
  }, [page]);

  return (
    <>
      <h2 className={styles.title}>Trending today</h2>
      <MoviesList page={page} setPage={setPage}>
        {data.map(({ id, name, image }) => {
          return <CardMovie key={id} id={id} title={name} poster={image} />;
        })}
        <Outlet />
      </MoviesList>
    </>
  );
}

export default HomePage;
