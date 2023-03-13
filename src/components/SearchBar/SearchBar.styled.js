import styled from 'styled-components';

export const Button = styled.button`
  font-size: 18px;
  padding: 7px 12px;
  margin-left: 10px;
  background-color: orangered;
  border: 0;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: background-color linear 250ms;
  &:hover {
    background-color: #c20a4e;
  }
`;
export const Input = styled.input`
  font-size: 20px;
  margin-right: 100px;
  @media (max-width: 1280px) {
    margin-right: 100px;
  }
`;
export const Radio = styled.div`
  margin-right: 10px;
  // @media (max-width: 1280px) {
  //   margin-right: 100px;
  // }
`;
export const SearchForm = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1280px) {
    flex-direction: column;
  }
`;
export const RadioWrapp = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1280px) {
    flex-direction: column;
  }
`;
