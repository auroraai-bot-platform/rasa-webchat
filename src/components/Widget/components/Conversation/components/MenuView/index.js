import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Trans } from 'react-i18next';

const langs = {
  en: { nativeName: 'English' },
  fi: { nativeName: 'Suomi' },
};

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
    let languageList = [];
    Object.keys(langs).forEach((key) => {
      languageList.push(
        <button
          key={key}
          className="rw-question-button rw-question-save-button"
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
          <Trans i18nKey="teksti.text1">Translation esimerkki</Trans>
          <br />
          {languageChoises()}
        </div>
        <div className="rw-bottom-area">
          <button
            id="manu-view-save-button"
            className="rw-question-button rw-question-save-button"
            onClick={saveChatToFile}
          >
            Tallenna keskustelu
          </button>
          <br />
          <button id="menu-view-close-button" className="rw-question-button" onClick={toggleChat}>
            Sulje keskustelu
          </button>
          <br />
          <button
            id="menu-view-cancel-button"
            className="rw-question-button"
            onClick={toggleMenuView}
          >
            Takaisin
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
