import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MessageInput from './chat/MessageInput';
import ChatMessageList from './chat/ChatMessageList';

const styles = theme => ({
  content: {
    position: 'absolute',
    left: 320,
    top: 0,
    right: 0,
    bottom: 0,
    overflowY: 'hidden',
    backgroundColor: theme.palette.background.default,
  },
  toolbar: theme.mixins.toolbar,
});

const Chat = ({ classes, messages, activeChat, activeUser, joinChat, sendMessage, isConnected }) => {
  return (
    <>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <ChatMessageList
          messages={messages}
          activeUser={activeUser}
          activeChat={activeChat}
        />
        {activeChat &&
         <MessageInput
           disabled={!isConnected}
           showJoinButton={!activeUser.isChatMember}
           onClickJoin={() => joinChat(activeChat._id)}
           sendMessage={sendMessage}
         />}
      </main>
    </>
  );
};

Chat.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,

  isConnected: PropTypes.bool.isRequired,

  activeUser: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    username: PropTypes.string,
    isMember: PropTypes.bool.isRequired,
    isCreator: PropTypes.bool.isRequired,
    isChatMember: PropTypes.bool.isRequired,
  }).isRequired,

  activeChat: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  joinChat: PropTypes.func.isRequired,
  setActiveChat: PropTypes.func.isRequired,

  messages: PropTypes.arrayOf(PropTypes.shape({
    chatId: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    sender: PropTypes.object.isRequired,
    createdAt: PropTypes.string.isRequired,
  })).isRequired,
  sendMessage: PropTypes.func.isRequired,
};

Chat.defaultProps = {
  activeChat: null,
};

export default withStyles(styles)(Chat);
