import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CardMovieWrapp } from './MoviesList.styled';

export function CardMovie({ state, id, title, poster }) {
  console.log(id);
  console.log(title);
  console.log(poster);
  return (
    <CardMovieWrapp>
      <Link to={`/movies/${id}`} state={state}>
        <img src={`${poster}`} alt={title} />
        <h3>{title}</h3>
      </Link>
    </CardMovieWrapp>
  );
}

CardMovie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string,
};
