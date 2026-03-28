import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ptTranslation from '../public/locales/pt/translation.json';
import enTranslation from '../public/locales/en/translation.json';
import itTranslation from '../public/locales/it/translation.json';

const resources = {
  pt: { translation: ptTranslation },
  en: { translation: enTranslation },
  it: { translation: itTranslation },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt',
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
