import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { BackBtn } from '../BackBtn';
import * as API from '../../services/API';
import styles from './MovieDetailsPage.module.css';

function MovieDetailsPage() {
  const { state } = useLocation();
  const [data, setData] = useState(null);
  const movieId = useParams().movieId;

  useEffect(() => {
    API.getMovieById(movieId).then(setData);
  }, []);

  return (
    data && (
      <>
        <BackBtn className={styles.goBack}>Go back</BackBtn>
        <div className={styles.movieDetails}>
          <div>
            <img className={styles.img} src={`${data.image}`} alt="" />
          </div>
          <div className={styles.descMovie}>
            <h2>created: {data.created}</h2>
            <h2>name: {data.name}</h2>
            {/* <p>Rating: {data.vote_average}</p> */}
            {/* <h3>Overview</h3> */}
            {/* <p>{data.overview}</p> */}
            <h3>Genres: {data.name}</h3>
            {/* <ul>
              {data.genres.map(data => {
                return (
                  <li key={data.id}>
                    <p>{data.name}</p>
                  </li>
                );
              })}
            </ul> */}
          </div>
        </div>
        {/* <div className={styles.reviews}>
            <Link to={`/movies/${data.id}/cast`} state={state}>Cast</Link>
            <Link to={`/movies/${data.id}/reviews`} state={state}>Reviews</Link>
        </div> */}
        <Outlet />
      </>
    )
  );
}

export default MovieDetailsPage;
