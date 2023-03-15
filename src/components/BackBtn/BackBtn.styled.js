import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackBtnStyled = styled(Link)`
  border: 1px solid var(--brand-color);
  width: 100px;
  padding: 10px;
  text-decoration: none;
  text-align: center;
  display: block;
  border-radius: 5px;
`;
