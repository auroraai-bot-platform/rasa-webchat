import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { toggleChat } from '../../../../../../store/actions';

const ClosePopup = ({ saveChatToFile, toggleClosePopup, toggleChat }) => {
  return (
    <div>
      <div className="rw-overlay"></div>
      <div className="rw-question-area">
        <div className="rw-question-text">Haluatko sulkea keskustelun?</div>
        <button id="close-popup-close-button" className="rw-question-button" onClick={toggleChat}>
          Sulje
        </button>
        <br />
        <button
          id="close-popup-cancel-button"
          className="rw-question-button"
          onClick={toggleClosePopup}
        >
          Peruuta
        </button>
        <br />
        <button
          id="close-popup-save-button"
          className="rw-question-button rw-question-save-button"
          onClick={saveChatToFile}
        >
          Tallenna keskustelu
        </button>
        <br />
      </div>
    </div>
  );
};

ClosePopup.propTypes = {
  toggleChat: PropTypes.func,
  saveChatToFile: PropTypes.func,
  toggleClosePopup: PropTypes.func,
};

export default ClosePopup;
