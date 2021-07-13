import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const DEFAULT_LANG = "th";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      th: {
        translation: require("../assets/locales/th.json"),
      },
    },
    lng: DEFAULT_LANG,
    fallbackLng: DEFAULT_LANG,

    interpolation: {
      escapeValue: false,
    },
  });
