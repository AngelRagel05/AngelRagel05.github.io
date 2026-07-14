import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';

const languages = [
  {
    code: 'en',
    label: 'EN',
    ariaLabelKey: 'language.switchToEnglish',
  },
  {
    code: 'es',
    label: 'ES',
    ariaLabelKey: 'language.switchToSpanish',
  },
];

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const activeLanguage = i18n.resolvedLanguage;

  return (
    <div
      className={styles.switcher}
      aria-label={t('accessibility.languageSelector')}
      role="group"
    >
      {languages.map((language) => {
        const isActive = activeLanguage === language.code;

        return (
          <button
            className={`${styles.button} ${isActive ? styles.active : ''}`}
            type="button"
            aria-label={t(language.ariaLabelKey)}
            aria-pressed={isActive}
            key={language.code}
            onClick={() => i18n.changeLanguage(language.code)}
          >
            {language.label}
          </button>
        );
      })}
    </div>
  );
}

export default LanguageSwitcher;
