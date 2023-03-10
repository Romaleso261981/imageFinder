import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MoviesList.module.css';

export function CardMovie({ state, id, title, poster }) {
  return (
    <li key={id} className={styles.cardMovie}>
      <Link to={`/movies/${id}`} state={state}>
        <img src={`${poster}`} alt={title} />
        <h3>{title}</h3>
      </Link>
    </li>
  );
}

CardMovie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string,
};
