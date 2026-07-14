import Navigation from '../Navigation/Navigation.jsx';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.brand} href="#hero" aria-label="Ir al inicio">
        Portfolio
      </a>
      <Navigation />
    </header>
  );
}

export default Header;
