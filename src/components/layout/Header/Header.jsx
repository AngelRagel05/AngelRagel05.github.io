import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../ui/LanguageSwitcher/LanguageSwitcher.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import styles from './Header.module.css';

function Header() {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <a className={styles.brand} href="#home" aria-label={t('navigation.home')}>
        {t('navigation.brand')}
      </a>
      <div className={styles.actions}>
        <Navigation />
        <LanguageSwitcher />
      </div>
    </header>
  );
}

export default Header;
