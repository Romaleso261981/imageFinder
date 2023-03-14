import { NavLink } from 'react-router-dom';
import { Hr } from '../Hr';
import { SearchBar } from '../SearchBar/SearchBar';
import styles from './Navigation.module.css';

export function Navigation({
  enteredSearchValue,
  setEnteredSearchValue,
  sortMode,
  setSortMode,
}) {
  // const user = {
  //   email: 'ladiginscormag@gmail.com',
  //   password: 123456,
  // };

  const user = null;

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <NavLink to="/" className={styles.navLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={styles.navLink}>
          Movies
        </NavLink>
      </nav>
      {user && (
        <SearchBar
          enteredSearchValue={enteredSearchValue}
          setEnteredSearchValue={setEnteredSearchValue}
          sortMode={sortMode}
          setSortMode={setSortMode}
        />
      )}
      <Hr />
    </header>
  );
}
