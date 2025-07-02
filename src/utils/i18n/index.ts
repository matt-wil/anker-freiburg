import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import LanguageDetector from 'i18next-browser-languagedetector'
import enLang from "./locales/en/en.json"
import frLang from "./locales/fr/fr.json"
import deLang from "./locales/de/de.json"


// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: enLang
  },
  fr: {
    translation: frLang
  },
  de: {
    translation: deLang
  }
};

i18n
  //.use(LanguageDetector) add in for browser language detection
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    debug: true,  //change to false before deployment.
    supportedLngs: ["de", "en", "fr"],
    fallbackLng: "en",
    lng: "de", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;