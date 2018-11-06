import React from 'react';
import PropTypes from 'prop-types';
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

  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,

    messages: PropTypes.arrayOf(PropTypes.shape({
      chatId: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      sender: PropTypes.object.isRequired,
      createdAt: PropTypes.string.isRequired,
    })),
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
  };

  static defaultProps = {
    messages: [],
  };

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
            message={message}
            activeUserId={activeUser._id}
          />
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(ChatMessageList);
