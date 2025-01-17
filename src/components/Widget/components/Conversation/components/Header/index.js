import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import logo from 'assets/Hytebotti.svg';
import close from 'assets/Close.svg';
import fullscreen from 'assets/fullscreen_button.svg';
import fullscreenExit from 'assets/fullscreen_exit_button.svg';
import threeDots from 'assets/three-dots-menu.svg';
import './style.scss';
import ThemeContext from '../../../../ThemeContext';

import SVG, { Props as SVGProps } from 'react-inlinesvg';

const Header = ({
  title,
  subtitle,
  fullScreenMode,
  toggleFullScreen,
  toggleChat,
  showCloseButton,
  showFullScreenButton,
  connected,
  connectingText,
  closeImage,
  profileAvatar,
  toggleMenuView,
  showMenuButton,
}) => {
  showCloseButton = true;

  const { mainColor } = useContext(ThemeContext);

  return (
    <div className="rw-header-and-loading">
      <div
        style={{ backgroundColor: mainColor }}
        className={`rw-header ${subtitle ? 'rw-with-subtitle' : ''}`}
      >
        {profileAvatar ? (
          <img src={profileAvatar} className="rw-avatar" alt="chat avatar" />
        ) : (
          <SVG src={logo} className="rw-avatar" alt="chat avatar" />
        )}
        <div className="rw-header-buttons">
          {showMenuButton && (
            <button className="rw-menu-button" onClick={toggleMenuView}>
              <SVG className={`rw-menu rw-default`} src={threeDots} alt="close" />
            </button>
          )}
          {showFullScreenButton && (
            <button className="rw-toggle-fullscreen-button" onClick={toggleFullScreen}>
              <img
                className={`rw-toggle-fullscreen ${
                  fullScreenMode ? 'rw-fullScreenExitImage' : 'rw-fullScreenImage'
                }`}
                src={fullScreenMode ? fullscreenExit : fullscreen}
                alt="toggle fullscreen"
              />
            </button>
          )}
          {showCloseButton && (
            <button className="rw-close-button" onClick={toggleChat}>
              <SVG
                className={`rw-close ${closeImage ? '' : 'rw-default'}`}
                src={closeImage || close}
                alt="close"
              />
            </button>
          )}
        </div>
        {/* <SVG src={logo} width={24} height="auto" title="Logo" class="rw-logo"/> */}

        <h4 className={`rw-title ${(profileAvatar || logo) && 'rw-with-avatar'}`}>{title}</h4>
        {subtitle && (
          <span className={(profileAvatar || logo) && 'rw-with-avatar'}>{subtitle}</span>
        )}
      </div>
      {!connected && <span className="rw-loading">{connectingText}</span>}
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  fullScreenMode: PropTypes.bool,
  toggleFullScreen: PropTypes.func,
  toggleChat: PropTypes.func,
  showCloseButton: PropTypes.bool,
  showFullScreenButton: PropTypes.bool,
  connected: PropTypes.bool,
  connectingText: PropTypes.string,
  closeImage: PropTypes.string,
  profileAvatar: PropTypes.string,
  toggleMenuView: PropTypes.func,
  showMenuButton: PropTypes.bool,
};

export default Header;
