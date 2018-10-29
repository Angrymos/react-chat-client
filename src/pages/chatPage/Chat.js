import React from 'react';
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

const Chat = ({ classes, messages, activeChat, activeUser, joinChat, sendMessage }) => {
  return (
    <>
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <ChatMessageList
        messages={messages}
        activeUser={activeUser}
      />
      <MessageInput
        sendMessage={sendMessage}
        showJoinButton={!activeUser.isChatMember}
        onClickJoin={() => joinChat(activeChat._id)}
        activeUser={activeUser}
      />
    </main>
      </>
  );
};

export default withStyles(styles)(Chat);
