import React from 'react';
import { shallow } from 'enzyme';

import Header from '../index';

describe('<Header />', () => {
  const createHeader = ({
    toggle,
    fullScreenMode,
    showFullScreenButton,
    saveToFile,
    togglePopup,
    menuButton,
  }) =>
    shallow(
      <Header
        toggleFullScreen={toggle}
        fullScreenMode={fullScreenMode}
        showFullScreenButton={showFullScreenButton}
        saveChatToFile={saveToFile}
        toggleClosePopup={togglePopup}
        showMenuButton={menuButton}
      />
    );

  it('should call toggle prop when clicked', () => {
    const toggle = jest.fn();
    const fullScreenMode = false;
    const showFullScreenButton = true;
    const saveToFile = jest.fn();
    const togglePopup = jest.fn();
    const menuButton = false;
    const headerComponent = createHeader({
      toggle,
      fullScreenMode,
      showFullScreenButton,
      saveToFile,
      togglePopup,
      menuButton,
    });
    headerComponent.find('.rw-toggle-fullscreen-button').simulate('click');
    expect(toggle).toBeCalled();
  });

  it('should render the fullscreen image when fullScreenMode = false', () => {
    const toggle = jest.fn();
    const fullScreenMode = false;
    const showFullScreenButton = true;
    const saveToFile = jest.fn();
    const togglePopup = jest.fn();
    const saveButton = false;
    const headerComponent = createHeader({
      toggle,
      fullScreenMode,
      showFullScreenButton,
      saveToFile,
      togglePopup,
      saveButton,
    });
    expect(headerComponent.find('.rw-fullScreenImage')).toHaveLength(1);
  });

  it('should render the fullscreen exit image when fullScreenMode = true', () => {
    const toggle = jest.fn();
    const fullScreenMode = true;
    const showFullScreenButton = true;
    const saveToFile = jest.fn();
    const togglePopup = jest.fn();
    const saveButton = false;
    const headerComponent = createHeader({
      toggle,
      fullScreenMode,
      showFullScreenButton,
      saveToFile,
      togglePopup,
      saveButton,
    });
    expect(headerComponent.find('.rw-fullScreenExitImage')).toHaveLength(1);
  });

  it('should not render the fullscreen toggle button when showFullScreenButton = false', () => {
    const toggle = jest.fn();
    const fullScreenMode = true;
    const showFullScreenButton = false;
    const saveToFile = jest.fn();
    const togglePopup = jest.fn();
    const saveButton = false;
    const headerComponent = createHeader({
      toggle,
      fullScreenMode,
      showFullScreenButton,
      saveToFile,
      togglePopup,
      saveButton,
    });
    expect(headerComponent.find('.rw-toggle-fullscreen-button')).toHaveLength(0);
  });

  it('should call save chat to file when save button is clicked', () => {
    const toggle = jest.fn();
    const fullScreenMode = true;
    const showFullScreenButton = false;
    const saveToFile = jest.fn();
    const togglePopup = jest.fn();
    const saveButton = true;
    const headerComponent = createHeader({
      toggle,
      fullScreenMode,
      showFullScreenButton,
      saveToFile,
      togglePopup,
      saveButton,
    });
    headerComponent.find('.rw-menu-button').simulate('click');
    expect(saveToFile).toBeCalled();
  });

  it('should call toggle close popup when close button is clicked', () => {
    const toggle = jest.fn();
    const fullScreenMode = true;
    const showFullScreenButton = false;
    const saveToFile = jest.fn();
    const togglePopup = jest.fn();
    const saveButton = false;
    const headerComponent = createHeader({
      toggle,
      fullScreenMode,
      showFullScreenButton,
      saveToFile,
      togglePopup,
      saveButton,
    });
    headerComponent.find('.rw-close-button').simulate('click');
    expect(togglePopup).toBeCalled();
  });
});
