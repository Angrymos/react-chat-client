import React from 'react';
import ChatHeader from './chatPage/ChatHeader';
import Sidebar from './chatPage/Sidebar';
import Chat from './chatPage/Chat';
import { messages } from '../mock-data';

class ChatPage extends React.Component {
  componentDidMount() {
    const { fetchAllChats, fetchMyChats } = this.props;

    Promise.all([
      fetchMyChats(),
      fetchAllChats(),
    ]);
  }

  render() {
    const { chats } = this.props;

    return (
      <>
        <ChatHeader />
        <Sidebar chatList={chats} />
        <Chat messages={messages} />
      </>
    );
  }
};

export default ChatPage;
