import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Sidebar from '../pages/chatPage/Sidebar';

jest.mock('../pages/chatPage/sideBar/ChatList', () => () => 'ChatList');

const mockProps = {
  isConnected: true,
  chats: {
    active: {},
    my: [],
    all: [],
  },
  onClickCreateChat: jest.fn(),
  setActiveChat: jest.fn(),
};

describe('<Sidebar />', () => {
  it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Sidebar {...mockProps} />, div);
  });
});
