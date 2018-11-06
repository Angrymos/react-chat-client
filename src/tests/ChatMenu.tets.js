import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatMenu from '../pages/chatPage/chatHeader/ChatMenu';

const mockProps = {
  disabled: false,
  activeUser: {
    isMember: true,
    isCreator: true,
    isChatMember: true,
  },
  onClickLeave: jest.fn(),
  onClickDelete: jest.fn(),
};

describe('<ChatMenu />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatMenu {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
