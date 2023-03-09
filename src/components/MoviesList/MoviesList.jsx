import styles from './MoviesList.module.css';

function MoviesList({children}) {
    return (<ul className={styles.movieList}>{children}</ul>)
}

export default MoviesList;

