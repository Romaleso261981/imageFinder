import { useLocation } from 'react-router-dom'
import {BackBtnStyled} from './BackBtn.styled';

export function BackBtn() {
  const { state } = useLocation();
  return <BackBtnStyled to={state ? state : '/movies'}>Go back</BackBtnStyled>;
}
