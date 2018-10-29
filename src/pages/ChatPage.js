import React from 'react';
import ChatHeader from './chatPage/ChatHeader';
import Sidebar from './chatPage/Sidebar';
import Chat from './chatPage/Chat';

class ChatPage extends React.Component {
  componentDidMount() {
    const { match, fetchAllChats, fetchMyChats, socketsConnection, mountChat, setActiveChat } = this.props;

    Promise.all([
      fetchMyChats(),
      fetchAllChats(),
    ])
      .then(() => {
        socketsConnection();
      })
      .then(() => {
        const { chatId } = match.params;

        if (chatId) {
          setActiveChat(chatId);
          mountChat(chatId);
        }
      });
  }

  componentWillReceiveProps(nextProps) {
    const { match: { params }, setActiveChat, unmountChat, mountChat } = this.props;
    const { params: nextParams } = nextProps.match;

    console.warn(params.chatId); //!!!!!

    if (nextParams.chatId && params.chatId !== nextParams.chatId) {
      setActiveChat(nextParams.chatId);
      unmountChat(params.chatId);
      mountChat(nextParams.chatId);
    }
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
