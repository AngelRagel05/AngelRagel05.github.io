import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import esTranslation from './locales/es/translation.json';

const supportedLanguages = ['en', 'es'];

function getSupportedLanguage(language) {
  const normalizedLanguage = language?.split('-')[0];

  return supportedLanguages.includes(normalizedLanguage)
    ? normalizedLanguage
    : 'en';
}

function updateDocumentLanguage(language) {
  document.documentElement.lang = getSupportedLanguage(language);
}

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      es: {
        translation: esTranslation,
      },
    },
    supportedLngs: supportedLanguages,
    fallbackLng: 'en',
    load: 'languageOnly',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'portfolio-language',
    },
    interpolation: {
      escapeValue: false,
    },
  })
  .then(() => {
    updateDocumentLanguage(i18next.resolvedLanguage);
  });

i18next.on('languageChanged', () => {
  updateDocumentLanguage(i18next.resolvedLanguage);
});

export default i18next;
