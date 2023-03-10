// import { Outlet, useLocation } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { getTrendingMovies } from '../../services/API';
// import MoviesList from '../MoviesList/MoviesList';
// import { CardMovie } from '../MoviesList/CardMovie';
import styles from './HomePage.module.css';

function HomePage() {
  // const [data, setData] = useState([]);
  // const [page, setPage] = useState(1);
  // const { pathname, search } = useLocation();
  // const currenUrl = `${pathname}${search}`;

  // useEffect(() => {
  //   getTrendingMovies(page).then(data => setData(data.results));
  // }, [page]);

  return (
    <>
      <h2 className={styles.title}>Home page</h2>
    </>
  );
}

export default HomePage;
