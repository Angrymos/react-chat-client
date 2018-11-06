import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatHeader from '../pages/chatPage/ChatHeader';

jest.mock('../components/Avatar', () => () => 'Avatar');
jest.mock('../pages/chatPage/chatHeader/ChatMenu', () => () => 'ChatMenu');
jest.mock('../pages/chatPage/chatHeader/UserMenu', () => () => 'UserMenu');

const mockProps = {
  isConnected: true,
  logout: jest.fn(),
  activeUser: {
    isMember: true,
    isCreator: true,
    isChatMember: true,
  },
  editUserInfo: jest.fn(),
  activeChat: {
    _id: '12345',
    title: 'My Chat',
  },
  leaveChat: jest.fn(),
  deleteChat: jest.fn(),
};

describe('<ChatHeader />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatHeader {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
