import React from 'react';
import ReactDOM from 'react-dom';
import MessageInput from '../pages/chatPage/chat/MessageInput';

jest.mock('moment', () => () => ({ fromNow: () => '2 days ago' }));

const mockProps = {
  messages: [
    {
      _id: '123foo321',
      chatId: '12345',
      content: 'Hello, World!',
      sender: {
        _id: '124j5d63',
        username: 'me',
      },
      createdAt: '2018-03-16T10:53:23.200Z',
    },
    {
      _id: '321bar123',
      chatId: '12345',
      content: 'Hello, React!',
      sender: {
        _id: '54321',
        username: 'someone',
      },
      createdAt: '2018-03-16T10:53:23.200Z',
    },
  ],
  activeUser: {
    _id: '124j5d63',
    username: 'me',
    isMember: true,
    isCreator: true,
    isChatMember: true,
  },
  activeChat: {
    _id: '321bar123',
    title: 'React chat',
  },
};

describe('<ChatMessageList />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MessageInput {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
