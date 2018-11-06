import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import ChatListItem from '../pages/chatPage/sideBar/ChatListItem';

jest.mock('moment', () => () => ({ fromNow: () => '2 days ago' }));

const mockProps = {
  disabled: false,

  chat: {
    _id: '12345',
    title: 'react chat',
    createdAt: '2018-03-16T10:53:23.200Z',
  },

  active: false,
  setActiveChat: jest.fn(),
};

describe('<ChatList />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <ChatListItem {...mockProps} />
      </MemoryRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
