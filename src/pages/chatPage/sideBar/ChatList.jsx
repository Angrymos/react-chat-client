import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ChatListItem from './ChatListItem';
import Typography from '../../../../node_modules/@material-ui/core/Typography/Typography';

const styles = theme => ({
  chatsList: {
    height: 'calc(100% - 56px)',
    overflowY: 'scroll',
  },
  noChats: {
    textAlign: 'center',
  },
});

const ChatList = ({ classes, chats, activeChat, setActiveChat, disabled }) => (
  <List className={classes.chatsList}>
    {chats && chats.length > 0 ? (
      chats.map(chat => (
        <ChatListItem
          key={chat._id}
          disabled={disabled}
          chat={chat}
          active={Boolean(activeChat && activeChat._id === chat._id)}
          setActiveChat={setActiveChat}
        />
      ))
    ) : (
      <Typography variant="subheading" className={classes.noChats}>
        There is no chats yet...
      </Typography>
    )}
  </List>
);

export default withStyles(styles)(ChatList);

ChatList.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  disabled: PropTypes.bool.isRequired,

  chats: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  })).isRequired,
  activeChat: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  setActiveChat: PropTypes.func.isRequired,
};

ChatList.defaultProps = {
  activeChat: null,
};
