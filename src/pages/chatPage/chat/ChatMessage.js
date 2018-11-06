import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import Avatar from '../../../components/Avatar';
import randomColor from '../../../utils/color-from';
import moment from 'moment';

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
  statusMessage: {
    width: '100%',
    textAlign: 'center',
  },
  statusMessageUser: {
    display: 'inline',
  },
});

const ChatMessage = ({ classes, message, activeUserId }) => {
  const userAvatar = (
    <Avatar colorFrom={message.sender.username}>{message.sender.username}</Avatar>
  );

  if (message.statusMessage) {
    return (
      <div className={classes.messageWrapper}>
        <Typography className={classes.statusMessage}>
          <Typography
            variant='caption'
            style={{ color: randomColor(message.sender._id) }}
            className={classes.statusMessageUser}
          >
            {message.sender.username}
          </Typography>
          {message.content}
          <Typography variant='caption' component='span'>
            {moment(message.createdAt).fromNow()}
          </Typography>
        </Typography>
      </div>
    );
  }

  const isMessageFromMe = message.sender._id === activeUserId;

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
          {message.sender.username}
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

ChatMessage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,

  message: PropTypes.shape({
    chatId: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    sender: PropTypes.object.isRequired,
    createdAt: PropTypes.string.isRequired,
    statusMessage: PropTypes.bool
  }),
  activeUserId: PropTypes.string.isRequired,
};

export default withStyles(styles)(ChatMessage);
