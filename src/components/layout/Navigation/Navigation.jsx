import { useTranslation } from 'react-i18next';
import styles from './Navigation.module.css';

const navigationItems = [
  { labelKey: 'navigation.home', href: '#home' },
  { labelKey: 'navigation.about', href: '#about' },
  { labelKey: 'navigation.experience', href: '#experience' },
  { labelKey: 'navigation.projects', href: '#projects' },
  { labelKey: 'navigation.skills', href: '#skills' },
  { labelKey: 'navigation.contact', href: '#contact' },
];

function Navigation() {
  const { t } = useTranslation();

  return (
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
  );
}

export default Navigation;
