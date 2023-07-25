import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Trans } from 'react-i18next';
import { useTranslation } from 'react-i18next';

const MenuView = ({
  saveChatToFile,
  toggleMenuView,
  toggleChat,
  changeLanguage,
  restartConversation,
}) => {
  const handleLanguageChange = (val) => {
    changeLanguage(val);
    restartConversation();
    toggleMenuView();
  };

  const languageChoises = () => {
    const langs = {
      en: { nativeName: 'English' },
      fi: { nativeName: 'Suomi' },
    };

    const { i18n } = useTranslation();
    let languageList = [];
    Object.keys(langs).forEach((key) => {
      const inUse = key === i18n.language;
      languageList.push(
        <button
          key={key}
          disabled={inUse}
          className="rw-question-button rw-language-button"
          onClick={() => handleLanguageChange(key)}
        >
          {langs[key].nativeName}
        </button>
      );
    });
    return languageList;
  };

  return (
    <div>
      <div className="rw-overlay"></div>
      <div className="rw-question-area">
        <div className="rw-top-area">
          <div className="rw-question-text">
            <Trans i18nKey="menuView.language" />
          </div>
          <br />
          {languageChoises()}
        </div>
        <div className="rw-bottom-area">
          <button
            id="menu-view-save-button"
            className="rw-question-button rw-question-save-button"
            onClick={saveChatToFile}
          >
            <Trans i18nKey="menuView.saveConversation" />
          </button>
          <br />
          <button id="menu-view-close-button" className="rw-question-button" onClick={toggleChat}>
            <Trans i18nKey="menuView.closeChat" />
          </button>
          <br />
          <button
            id="menu-view-cancel-button"
            className="rw-question-button"
            onClick={toggleMenuView}
          >
            <Trans i18nKey="menuView.back" />
          </button>
          <br />
        </div>
      </div>
    </div>
  );
};

MenuView.propTypes = {
  toggleChat: PropTypes.func,
  saveChatToFile: PropTypes.func,
  toggleMenuView: PropTypes.func,
  changeLanguage: PropTypes.func,
  restartConversation: PropTypes.func,
};

export default MenuView;
