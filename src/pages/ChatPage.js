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
    const {
      chats,
      messages,
      logout,
      editUserInfo,
      deleteChat,
      createChat,
      activeUser,
      joinChat,
      leaveChat,
      setActiveChat,
      sendMessage,
    } = this.props;

    return (
      <>
        <ChatHeader
          logout={logout}
          editUserInfo={editUserInfo}
          deleteChat={deleteChat}
          leaveChat={leaveChat}
          activeUser={activeUser}
          activeChat={chats.active}
        />
        <Sidebar
          chats={chats}
          activeChat={chats.active}
          onClickCreateChat={createChat}
          setActiveChat={setActiveChat}
        />
        <Chat
          messages={messages}
          activeChat={chats.active}
          activeUser={activeUser}
          joinChat={joinChat}
          sendMessage={sendMessage}
          setActiveChat={setActiveChat}
        />
      </>
    );
  }
};

export default ChatPage;
