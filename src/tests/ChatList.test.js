import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatList from '../pages/chatPage/sideBar/ChatList';

jest.mock('../pages/chatPage/sideBar/ChatList', () => ({ chatId }) => `ChatListItem-${chatId}`);
jest.mock('moment', () => () => ({ fromNow: () => '2 days ago' }));

const mockProps = {
  disabled: false,
  chats: [
    {
      _id: '12345',
      title: 'First chat',
      createdAt: '2018-03-16T10:53:23.200Z',
    },
    {
      _id: '54321',
      title: 'Second chat',
      createdAt: '2018-03-16T10:53:23.200Z',
    },
  ],
  activeChat: {
    _id: '12345',
  },
  setActiveChat: jest.fn(),
};

describe('<ChatList />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatList {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
