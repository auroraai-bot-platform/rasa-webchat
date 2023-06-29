import React from 'react';
import { shallow } from 'enzyme';

import MenuView from '../index';

describe('<MenuView />', () => {
  const createMenuView = ({ saveToFile, togglePopup, toggle }) =>
    shallow(
      <MenuView saveChatToFile={saveToFile} toggleMenuView={togglePopup} toggleChat={toggle} />
    );

  it('should call toggleChat prop when close button clicked', () => {
    const saveToFile = jest.fn();
    const togglePopup = jest.fn();
    const toggle = jest.fn();
    const MenuView = createMenuView({ saveToFile, togglePopup, toggle });
    MenuView.find('#close-popup-close-button').simulate('click');
    expect(toggle).toBeCalled();
  });

  it('should call toggleMenuView prop when cancel button clicked', () => {
    const saveToFile = jest.fn();
    const togglePopup = jest.fn();
    const toggle = jest.fn();
    const MenuView = createMenuView({ saveToFile, togglePopup, toggle });
    MenuView.find('#close-popup-cancel-button').simulate('click');
    expect(togglePopup).toBeCalled();
  });

  it('should call saveChatToFile prop when save button clicked', () => {
    const saveToFile = jest.fn();
    const togglePopup = jest.fn();
    const toggle = jest.fn();
    const MenuView = createMenuView({ saveToFile, togglePopup, toggle });
    MenuView.find('#close-popup-save-button').simulate('click');
    expect(saveToFile).toBeCalled();
  });
});
