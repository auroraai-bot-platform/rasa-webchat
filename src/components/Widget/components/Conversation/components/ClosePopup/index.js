import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ClosePopup = ({ saveChatToFile, toggleMenuView, toggleChat }) => {
  return (
    <div>
      <div className="rw-overlay"></div>
      <div className="rw-question-area">
        <div className="rw-top-area"></div>
        <div className="rw-bottom-area">
          <button
            id="close-popup-save-button"
            className="rw-question-button rw-question-save-button"
            onClick={saveChatToFile}
          >
            Tallenna keskustelu
          </button>
          <br />
          <button id="close-popup-close-button" className="rw-question-button" onClick={toggleChat}>
            Sulje keskustelu
          </button>
          <br />
          <button
            id="close-popup-cancel-button"
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

ClosePopup.propTypes = {
  toggleChat: PropTypes.func,
  saveChatToFile: PropTypes.func,
  toggleMenuView: PropTypes.func,
};

export default ClosePopup;
