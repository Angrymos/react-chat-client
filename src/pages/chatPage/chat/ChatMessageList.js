import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ChatMessage from './ChatMessage';
import Paper from '@material-ui/core/Paper/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  messagesWrapper: {
    top: 64,
    bottom: 0,
    paddingBottom: 120,
    position: 'absolute',
    width: '100%',
    overflowY: 'scroll',
  },
  paper: {
    padding: theme.spacing.unit * 3,
  },
  wrapper: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class ChatMessageList extends React.Component {
  constructor(props) {
    super(props);
    this.messagesWrapper = React.createRef();
  }

  componentDidMount() {
    this.scrollDownHistory();
  }

  componentDidUpdate() {
    this.scrollDownHistory();
  }

  scrollDownHistory() {
    const messagesWrapper = this.messagesWrapper.current;

    if (messagesWrapper) {
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
    }
  }

  render() {
    const { classes, messages, activeUser, activeChat } = this.props;
    if (!activeChat) {
      return (
        <div className={classes.wrapper}>
          <Paper className={classes.paper}>
            <Typography variant='display1' gutterBottom>
              Start messaging…
            </Typography>
            <Typography variant='body1' gutterBottom>
              Use <strong>Global</strong> to explore communities around here.
            </Typography>
            <Typography variant='body1' gutterBottom>
              Use <strong>Recents</strong> to see your recent conversations.
            </Typography>
          </Paper>
        </div>
      );
    }

    return (
      <div className={classes.messagesWrapper} ref={this.messagesWrapper}>
        {messages && messages.map((message, index) => (
          <ChatMessage
            key={index}
            activeUserId={activeUser._id}
            message={message}
          />
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(ChatMessageList);
