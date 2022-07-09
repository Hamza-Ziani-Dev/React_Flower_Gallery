import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import transEn from './locale/en.json';
import transAr from './locale/ar.json';

const resources = {
    en: {
        translation: transEn,
    },
    ar: {
        translation: transAr,
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false
        },
        react: {
          useSuspense : false,
        }
    });

export default i18n;