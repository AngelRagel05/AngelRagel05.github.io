import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { socialLinks } from '../../../data/socialLinks.js';
import LanguageSwitcher from '../../ui/LanguageSwitcher/LanguageSwitcher.jsx';
import styles from './Header.module.css';

const MOBILE_MENU_ID = 'main-navigation';

const navigationItems = [
  { labelKey: 'navigation.projects', href: '#projects' },
  { labelKey: 'navigation.about', href: '#about' },
  { labelKey: 'navigation.experience', href: '#experience' },
  { labelKey: 'navigation.techStack', href: '#tech-stack' },
  { labelKey: 'navigation.contact', href: '#contact' },
];

function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a className={styles.brand} href="#hero" onClick={closeMenu}>
          Ángel Jiménez Ragel
        </a>

        <div className={styles.mobileControls}>
          <LanguageSwitcher />
          <button
            className={styles.menuButton}
            type="button"
            aria-controls={MOBILE_MENU_ID}
            aria-expanded={isMenuOpen}
            aria-label={
              isMenuOpen
                ? t('accessibility.closeMenu')
                : t('accessibility.openMenu')
            }
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          >
            <span className={styles.menuIcon} aria-hidden="true" />
          </button>
        </div>

        <div
          className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}
          id={MOBILE_MENU_ID}
        >
          <nav
            className={styles.navigation}
            aria-label={t('accessibility.mainNavigation')}
          >
            {navigationItems.map((item) => (
              <a
                className={styles.link}
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                {t(item.labelKey)}
              </a>
            ))}
          </nav>

          <div className={styles.desktopLanguage}>
            <LanguageSwitcher />
          </div>

          <a
            className={styles.cvLink}
            href={socialLinks.cv}
            download
            onClick={closeMenu}
          >
            {t('navigation.downloadCv')}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
