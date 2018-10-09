import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ChatMessage from './Components/ChatMessage';
import MessageInput from './Components/MessageInput';
import ChatMessageList from './Components/ChatMessageList';

const styles = theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
});

const Chat = ({classes, messages}) => {
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
          <ChatMessageList messages={messages}/>
          <MessageInput />
      </main>
    );
  }


export default withStyles(styles)(Chat);
