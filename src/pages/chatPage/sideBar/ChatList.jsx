import React from 'react';
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
          setActiveChat={setActiveChat}
          active={Boolean(activeChat && activeChat._id === chat._id)}
          chat={chat}
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
