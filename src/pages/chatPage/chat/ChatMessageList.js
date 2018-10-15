import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ChatMessage from './ChatMessage';

const styles = theme => ({
  messagesWrapper: {
    top: 64,
    bottom: 0,
    paddingBottom: 120,
    position: 'absolute',
    overflowY: 'scroll',
  },
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
    const { classes, messages } = this.props;
    return (
      <div className={classes.messagesWrapper} ref={this.messagesWrapper}>
        {messages && messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message}
          />
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(ChatMessageList);
