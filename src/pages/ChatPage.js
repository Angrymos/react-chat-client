import React from 'react';
import ChatHeader from './chatPage/ChatHeader';
import Sidebar from './chatPage/Sidebar';
import Chat from './chatPage/Chat';
import ErrorMessage from '../components/ErrorMessage';

class ChatPage extends React.Component {
  componentDidMount() {
    const { match, fetchAllChats, fetchMyChats, socketsConnect, mountChat, setActiveChat } = this.props;

    Promise.all([
      fetchMyChats(),
      fetchAllChats(),
    ])
      .then(() => {
        socketsConnect();
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
      error,
      isConnected,
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
          isConnected={isConnected}
        />
        <Sidebar
          chats={chats}
          activeChat={chats.active}
          onClickCreateChat={createChat}
          setActiveChat={setActiveChat}
          isConnected={isConnected}
        />
        <Chat
          messages={messages}
          activeChat={chats.active}
          activeUser={activeUser}
          joinChat={joinChat}
          sendMessage={sendMessage}
          setActiveChat={setActiveChat}
          isConnected={isConnected}
        />
        <ErrorMessage error={error}/>
      </>
    );
  }
};

export default ChatPage;
