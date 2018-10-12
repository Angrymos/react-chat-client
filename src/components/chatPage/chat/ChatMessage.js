import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import Avatar from '../../Avatar';

const styles = theme => ({
  messageWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
  },
  messageWrappperFromMe: {
    justifyContent: 'flex-end',
  },
  message: {
    maxWidth: '45%',
    minWidth: '10%',
    padding: theme.spacing.unit,
  },
  messageFromMe: {
    marginRight: theme.spacing.unit * 2,
    backgroundColor: '#e6dcff',
  },
});

const ChatMessage = ({ classes, message }) => {
  const userAvatar = (
    <Avatar colorFrom={message.sender}>{message.sender}</Avatar>
  );

  const isMessageFromMe = message.sender === 'me';

  return (
    <div
      className={classnames(
        classes.messageWrapper,
        isMessageFromMe && classes.messageWrappperFromMe,
      )}
    >
      {isMessageFromMe && userAvatar}
      <Paper
        className={classnames(
          classes.message,
          isMessageFromMe && classes.messageFromMe,
        )}
      >
        <Typography variant='caption'>
          {message.sender}
        </Typography>
        <Typography variant='body1'>
          {message.content}
        </Typography>
        <Typography variant='caption'>
          1 min ago.
        </Typography>
      </Paper>
      {!isMessageFromMe && userAvatar}
    </div>
  );
};

export default withStyles(styles)(ChatMessage);
