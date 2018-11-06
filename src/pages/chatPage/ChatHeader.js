import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import UserMenu from './chatHeader/UserMenu';
import ChatMenu from './chatHeader/ChatMenu';
import Avatar from '../../components/Avatar';

const styles = theme => ({
  appBar: {
    position:'absolute',
    width: 'calc(100% - 320px)',
    marginLeft: 320,
  },
  appBarTitle: {
    flex: 1,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    color: theme.palette.secondary.contrastText,
  },
});

const ChatHeader = ({ classes, logout, activeChat, activeUser, leaveChat, deleteChat, editUserInfo, isConnected }) => (
  <AppBar className={classes.appBar}>
    <Toolbar>
      {activeChat ? (
        <>
          <Avatar colorFrom={activeChat.title}>{activeChat.title}</Avatar>
          <Typography variant='title' className={classes.appBarTitle}>
            {activeChat.title}
            <ChatMenu
              disabled={!isConnected}
              activeUser={activeUser}
              onClickLeave={() => leaveChat(activeChat._id)}
              onClickDelete={() => deleteChat(activeChat._id)}
            />
          </Typography>
        </>
      ) : (
        <Typography variant='title' className={classes.appBarTitle}>
          DogeCodes React Chat
        </Typography>
      )}
      <UserMenu
        disabled={!isConnected}
        activeUser={activeUser}
        onClickEditUserInfo={editUserInfo}
        onClickLogout={() => logout()}
      />
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(ChatHeader);
