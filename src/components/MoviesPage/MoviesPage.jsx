import { Outlet, useLocation } from 'react-router-dom';
import MoviesList from '../MoviesList/MoviesList';
import { CardMovie } from '../MoviesList/CardMovie';
import styles from './MoviesPage.module.css';

function HomePage({ setPage, page, data, sortedItems }) {
  // const { pathname, search } = useLocation();
  // const currenUrl = `${pathname}${search}`;

  return (
    <>
      <h2 className={styles.title}>Trending today</h2>
      <MoviesList
        page={page}
        setPage={setPage}
        data={data}
        sortedItems={sortedItems}
      >
        {data.map(({ id, name, image }) => {
          return <CardMovie key={id} id={id} title={name} poster={image} />;
        })}
        <Outlet />
      </MoviesList>
    </>
  );
}

export default HomePage;
