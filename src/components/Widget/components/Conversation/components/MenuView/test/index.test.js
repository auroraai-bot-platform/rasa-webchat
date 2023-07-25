import React from 'react';
import { shallow } from 'enzyme';

import MenuView from '../index';
import { any } from 'prop-types';

describe('<MenuView />', () => {
  const createMenuView = ({
    saveToFile,
    togglePopup,
    toggle,
    changeLanguage,
    restartConversation,
  }) =>
    shallow(
      <MenuView
        saveChatToFile={saveToFile}
        toggleMenuView={togglePopup}
        toggleChat={toggle}
        changeLanguage={changeLanguage}
        restartConversation={restartConversation}
      />
    );

  it('should call toggleChat prop when close button clicked', () => {
    const saveToFile = jest.fn();
    const togglePopup = jest.fn();
    const toggle = jest.fn();
    const MenuView = createMenuView({ saveToFile, togglePopup, toggle });
    MenuView.find('#menu-view-close-button').simulate('click');
    expect(toggle).toBeCalled();
  });

  it('should call toggleMenuView prop when cancel button clicked', () => {
    const saveToFile = jest.fn();
    const togglePopup = jest.fn();
    const toggle = jest.fn();
    const MenuView = createMenuView({ saveToFile, togglePopup, toggle });
    MenuView.find('#menu-view-cancel-button').simulate('click');
    expect(togglePopup).toBeCalled();
  });

  it('should call saveChatToFile prop when save button clicked', () => {
    const saveToFile = jest.fn();
    const togglePopup = jest.fn();
    const toggle = jest.fn();
    const MenuView = createMenuView({ saveToFile, togglePopup, toggle });
    MenuView.find('#menu-view-save-button').simulate('click');
    expect(saveToFile).toBeCalled();
  });

  it('should call changeLanguage, restartConversation and toggleMenuView prop when language is changed', () => {
    const saveToFile = jest.fn();
    const togglePopup = jest.fn();
    const toggle = jest.fn();
    const changeLanguage = jest.fn();
    const restartConversation = jest.fn();

    const MenuView = createMenuView({
      saveToFile,
      togglePopup,
      toggle,
      changeLanguage,
      restartConversation,
    });
    expect(MenuView.find('.rw-language-button')).toHaveLength(2);
    MenuView.find('.rw-language-button').first().simulate('click');
    expect(changeLanguage).toBeCalled();
    expect(restartConversation).toBeCalled();
    expect(togglePopup).toBeCalled();
    MenuView.find('.rw-language-button').last().simulate('click');
    expect(changeLanguage).toBeCalled();
    expect(restartConversation).toBeCalled();
    expect(togglePopup).toBeCalled();
  });
});
