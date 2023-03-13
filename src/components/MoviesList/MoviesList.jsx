import styles from './MoviesList.module.css';
import { Btn } from '../Buttons/Btn';

function MoviesList({ children, page, setPage, data, sortedItems }) {
  const loadMore = () => {
    page += 1;
    setPage(page);
    console.log(page);
  };

  const isShow = sortedItems ? sortedItems : data;
  return (
    <>
      <ul className={styles.movieList}>{children}</ul>
      <div className={styles.btnWrapper}>
        {isShow && <Btn text="load more" onClick={loadMore} />}
      </div>
    </>
  );
}

export default MoviesList;
