import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../services/API';
import MoviesList from '../MoviesList/MoviesList';
import { CardMovie } from '../MoviesList/CardMovie';
import styles from './HomePage.module.css';

function HomePage() {
  const [data, setData] = useState([]);
  const { pathname, search } = useLocation();
  const currenUrl = `${pathname}${search}`;

  useEffect(() => {
    getTrendingMovies().then(data => setData(data.results));
  }, []);

  const url = useNavigate();
  console.log(url);
  return (
    <>
      <h2 className={styles.title}>Trending today</h2>
      <MoviesList>
        {data.map(({ id, name, image }) => {
          return (
            <CardMovie
              key={id}
              state={currenUrl}
              id={id}
              title={name}
              poster={image}
            />
          );
        })}
        <Outlet />
      </MoviesList>
    </>
  );
}

export default HomePage;
