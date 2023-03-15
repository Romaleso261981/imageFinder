import { NavLink } from 'react-router-dom';
import { Hr } from '../Hr';
import { NavigationWrapp } from './Navigation.styled';

export function Navigation() {
  const user = null;

  return (
    <header>
      <NavigationWrapp>
        <NavLink to="/" >
          Home
        </NavLink>
        <NavLink to="/movies">
          Movies
        </NavLink>
      </NavigationWrapp>

      <Hr />
    </header>
  );
}
