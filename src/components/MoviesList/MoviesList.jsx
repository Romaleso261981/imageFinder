import { MovieList, BtnWrapper } from './MoviesList.styled';
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
      <MovieList>{children}</MovieList>
      <BtnWrapper>
        {isShow && <Btn text="load more" onClick={loadMore} />}
      </BtnWrapper>
    </>
  );
}

export default MoviesList;
