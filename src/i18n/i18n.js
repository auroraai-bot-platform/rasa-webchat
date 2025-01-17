import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          menuView: {
            language: 'Language',
            saveConversation: 'Save conversation',
            closeChat: 'Close chat',
            back: 'Back',
          },
        },
      },
      fi: {
        translation: {
          menuView: {
            language: 'Kieli',
            saveConversation: 'Tallenna keskustelu',
            closeChat: 'Sulje keskustelu',
            back: 'Takaisin',
          },
        },
      },
      sv: {
        translation: {
          menuView: {
            language: 'Språk',
            saveConversation: 'Spara konversationen',
            closeChat: 'Stäng chatten',
            back: 'Tillbaka',
          },
        },
      },
      de: {
        translation: {
          menuView: {
            language: 'Sprache',
            saveConversation: 'Gespräch speichern',
            closeChat: 'Chat schließen',
            back: 'Zurück',
          },
        },
      },
      fr: {
        translation: {
          menuView: {
            language: 'Langue',
            saveConversation: 'Enregistrer la conversation',
            closeChat: 'Fermer le chat',
            back: 'Dos',
          },
        },
      },
    },
  });
export default i18n;
