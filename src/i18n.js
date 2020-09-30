import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './pages/CannaLanding/locales/en/translation.json';
import ua from './pages/CannaLanding/locales/ua/translation.json'



i18n
  .use(initReactI18next)

  .init({
    fallbackLng: 'ua',
    debug: true,
    resources: {
      en: {
        translation: en
      },
      ua: {
        translation: ua
      },
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      }
    }
  });


export default i18n;