import styled from 'styled-components';

export const MovieList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
  @media (min-width: 380px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1200px) {
    padding: 10px;
    grid-template-columns: repeat(5, 1fr);
  }
`;
export const CardMovieWrapp = styled.ul`
  width: 100%;
  padding: 10px;
  border: 1px solid;
  border-radius: 10px;
  list-style: none;
  text-decoration: none;
`;
export const BtnWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`;


