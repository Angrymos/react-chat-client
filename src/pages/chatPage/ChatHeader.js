import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import UserMenu from './UserMenu';
import ChatMenu from './ChatMenu';

const styles = theme => ({
  appBar: {
    width: `calc(100% - ${320}px)`,
  },
});

const ChatHeader = ({ classes, logout, activeChat, activeUser, leaveChat, deleteChat, editUserInfo }) => (
  <AppBar position='absolute' className={classes.appBar}>
    {console.warn('activeChat', activeChat)}
    {console.warn('activeUser', activeUser)}
    <Toolbar>
      <Typography variant='title' color='inherit' noWrap>
        DogeCodes React chat
      </Typography>
      <ChatMenu
        activeUser={activeUser}
        onClickDelete={() => deleteChat(activeChat._id)}
        onClickLeave={() => leaveChat(activeChat._id)}
      />
      <UserMenu
        activeUser={activeUser}
        onClickEditUserInfo={editUserInfo}
        onClickLogout={() => logout()}
      />
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(ChatHeader);
