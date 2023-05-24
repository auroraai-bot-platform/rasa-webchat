import React from 'react';
import { shallow } from 'enzyme';

import ClosePopup from '../index';

describe('<ClosePopup />', () => {
  const createClosePopup = ({ saveToFile, togglePopup, toggle }) =>
    shallow(
      <ClosePopup saveChatToFile={saveToFile} toggleClosePopup={togglePopup} toggleChat={toggle} />
    );

  it('should call toggleChat prop when close button clicked', () => {
    const saveToFile = jest.fn();
    const togglePopup = jest.fn();
    const toggle = jest.fn();
    const ClosePopup = createClosePopup({ saveToFile, togglePopup, toggle });
    ClosePopup.find('#close-popup-close-button').simulate('click');
    expect(toggle).toBeCalled();
  });

  it('should call toggleClosePopup prop when cancel button clicked', () => {
    const saveToFile = jest.fn();
    const togglePopup = jest.fn();
    const toggle = jest.fn();
    const ClosePopup = createClosePopup({ saveToFile, togglePopup, toggle });
    ClosePopup.find('#close-popup-cancel-button').simulate('click');
    expect(togglePopup).toBeCalled();
  });

  it('should call saveChatToFile prop when save button clicked', () => {
    const saveToFile = jest.fn();
    const togglePopup = jest.fn();
    const toggle = jest.fn();
    const ClosePopup = createClosePopup({ saveToFile, togglePopup, toggle });
    ClosePopup.find('#close-popup-save-button').simulate('click');
    expect(saveToFile).toBeCalled();
  });
});
