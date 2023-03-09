import { NavLink } from 'react-router-dom';
import { Hr } from '../Hr';
import styles from './Navigation.module.css';

export function Navigation() {
    return (
        <header className={styles.header}>            
            <nav className={styles.navigation}>
                <NavLink to='/' className={styles.navLink}>Home</NavLink>
                <NavLink to='/movies' className={styles.navLink}>Movies</NavLink>
            </nav>
            <Hr />            
        </header>
    )
}  
