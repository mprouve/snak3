import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  /*
   * i18next-browser-language detector allow i18n to get the browser language as default option language.
   */
  .use(LanguageDetector)
  /*
   * i18next-http-backend allow i18n to get the json namespaces files via http.
   */
  .use(Backend)
  /*
   * initReactI18next allows to integrate i18n with React components.
   */
  .use(initReactI18next)
  /*
   * Here i18n it's initialized
   */
  .init({
    fallbackLng: 'en',
    backend: {
      loadPath: `/locales/{{lng}}/{{ns}}.json?version=${Date.now()}`,
    },
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
  });

export const nameSpace = {
  common: 'common',
  home: 'home',
  game: 'game',
  notFound: 'notFound',
};

export default i18n;
