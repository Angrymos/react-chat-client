import React from 'react';
import PropTypes from 'prop-types';
import ChatHeader from './chatPage/ChatHeader';
import Sidebar from './chatPage/Sidebar';
import Chat from './chatPage/Chat';
import ErrorMessage from '../components/ErrorMessage';

class ChatPage extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object.isRequired,
    }).isRequired,
    fetchAllChats: PropTypes.func.isRequired,
    fetchMyChats: PropTypes.func.isRequired,
    setActiveChat: PropTypes.func.isRequired,
    socketsConnect: PropTypes.func.isRequired,
    mountChat: PropTypes.func.isRequired,
    unmountChat: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    chats: PropTypes.shape({
      active: PropTypes.object,
      my: PropTypes.array.isRequired,
      all: PropTypes.array.isRequired,
    }).isRequired,
    activeUser: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      username: PropTypes.string,
      isMember: PropTypes.bool.isRequired,
      isCreator: PropTypes.bool.isRequired,
      isChatMember: PropTypes.bool.isRequired,
    }).isRequired,
    createChat: PropTypes.func.isRequired,
    joinChat: PropTypes.func.isRequired,
    leaveChat: PropTypes.func.isRequired,
    deleteChat: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
    messages: PropTypes.arrayOf(PropTypes.shape({
      chatId: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      sender: PropTypes.object.isRequired,
      createdAt: PropTypes.string.isRequired,
    })).isRequired,
    editUserInfo: PropTypes.func.isRequired,
    error: PropTypes.instanceOf(Error),
    isConnected: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    error: null,
  };

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
          isConnected={isConnected}
          logout={logout}
          activeUser={activeUser}
          editUserInfo={editUserInfo}
          activeChat={chats.active}
          deleteChat={deleteChat}
          leaveChat={leaveChat}
        />
        <Sidebar
          isConnected={isConnected}
          chats={chats}
          activeChat={chats.active}
          onClickCreateChat={createChat}
          setActiveChat={setActiveChat}
        />
        <Chat
          isConnected={isConnected}
          activeUser={activeUser}
          activeChat={chats.active}
          joinChat={joinChat}
          setActiveChat={setActiveChat}
          messages={messages}
          sendMessage={sendMessage}
        />
        <ErrorMessage error={error} />
      </>
    );
  }
};

export default ChatPage;
