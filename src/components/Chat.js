import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { messages } from '../mock-data';
import ChatMessage from './Chat/ChatMessage';
import MessageInput from './Chat/MessageInput';

const styles = theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
  messagesWrapper: {
    overflowX: 'scroll',
    height: '100%',
    width: '100%',
    paddingBottom: 120,
  },
  messageInputWrapper: {
    position: 'fixed',
    left: 'auto',
    right: 32,
    bottom: 0,
    width: 'calc(100% - 352px)',
    padding: theme.spacing.unit * 3,
  },
});

class Chat extends React.Component {
  componentDidMount() {
    this.scrollDownHistory();
  }

  componentDidUpdate() {
    this.scrollDownHistory();
  }

  scrollDownHistory() {
    const messagesWrapper = this.refs.messagesWrapper;

    if (messagesWrapper) {
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.messagesWrapper} ref='messagesWrapper'>
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message}
            />
          ))}
        </div>
        <div className={classes.messageInputWrapper}>
          <MessageInput />
        </div>
      </main>
    );
  }
}

export default withStyles(styles)(Chat);
