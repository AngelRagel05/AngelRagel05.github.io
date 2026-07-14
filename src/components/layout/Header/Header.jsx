import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../ui/LanguageSwitcher/LanguageSwitcher.jsx';
import styles from './Header.module.css';

const navigationItems = [
  { labelKey: 'navigation.home', href: '#hero' },
  { labelKey: 'navigation.projects', href: '#projects' },
  { labelKey: 'navigation.about', href: '#about' },
  { labelKey: 'navigation.experience', href: '#experience' },
  { labelKey: 'navigation.techStack', href: '#tech-stack' },
  { labelKey: 'navigation.contact', href: '#contact' },
];

function Header() {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <a className={styles.brand} href="#hero" aria-label={t('navigation.home')}>
        {t('navigation.brand')}
      </a>
      <div className={styles.actions}>
        <nav
          className={styles.navigation}
          aria-label={t('accessibility.mainNavigation')}
        >
          {navigationItems.map((item) => (
            <a className={styles.link} href={item.href} key={item.href}>
              {t(item.labelKey)}
            </a>
          ))}
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}

export default Header;
