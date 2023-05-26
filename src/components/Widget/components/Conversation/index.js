import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Messages from './components/Messages';
import Sender from './components/Sender';
import './style.scss';
import ClosePopup from './components/ClosePopup';

const Conversation = (props) => {
  const [showClosePopup, setShowClosePopup] = useState(false);

  function toggleShowClosePopup() {
    setShowClosePopup(!showClosePopup);
  }
  return (
    <div className="rw-conversation-container">
      {showClosePopup && (
        <div>
          <ClosePopup
            saveChatToFile={props.saveChatToFile}
            toggleClosePopup={toggleShowClosePopup}
            toggleChat={props.toggleChat}
          />
        </div>
      )}
      <Header
        title={props.title}
        subtitle={props.subtitle}
        toggleChat={props.toggleChat}
        toggleFullScreen={props.toggleFullScreen}
        fullScreenMode={props.fullScreenMode}
        showCloseButton={props.showCloseButton}
        showFullScreenButton={props.showFullScreenButton}
        connected={props.connected}
        connectingText={props.connectingText}
        closeImage={props.closeImage}
        profileAvatar={props.profileAvatar}
        toggleClosePopup={toggleShowClosePopup}
        saveChatToFile={props.saveChatToFile}
        showSaveButton={props.showSaveButton}
      />
      <Messages
        profileAvatar={props.profileAvatar}
        params={props.params}
        customComponent={props.customComponent}
        showMessageDate={props.showMessageDate}
      />
      <Sender
        sendMessage={props.sendMessage}
        disabledInput={props.disabledInput}
        inputTextFieldHint={props.inputTextFieldHint}
      />
    </div>
  );
};

Conversation.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  sendMessage: PropTypes.func,
  profileAvatar: PropTypes.string,
  toggleFullScreen: PropTypes.func,
  fullScreenMode: PropTypes.bool,
  toggleChat: PropTypes.func,
  showCloseButton: PropTypes.bool,
  showFullScreenButton: PropTypes.bool,
  disabledInput: PropTypes.bool,
  inputTextFieldHint: PropTypes.string,
  params: PropTypes.object,
  connected: PropTypes.bool,
  connectingText: PropTypes.string,
  closeImage: PropTypes.string,
  customComponent: PropTypes.func,
  showMessageDate: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  saveChatToFile: PropTypes.func,
  showSaveButton: PropTypes.bool,
};

export default Conversation;
