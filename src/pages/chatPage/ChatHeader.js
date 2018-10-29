import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import UserMenu from './UserMenu';
import ChatMenu from './ChatMenu';
import Avatar from '../../components/Avatar';

const styles = theme => ({
  appBar: {
    position: 'fixed',
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

const ChatHeader = ({ classes, logout, activeChat, activeUser, leaveChat, deleteChat, editUserInfo }) => (
  <AppBar position='absolute' className={classes.appBar}>
    <Toolbar>
      {activeChat ? (
        <React.Fragment>
          <Avatar colorFrom={activeChat._id}>{activeChat.title}</Avatar>
          <Typography variant="title" className={classes.appBarTitle}>
            {activeChat.title}
            <ChatMenu
              activeUser={activeUser}
              onLeaveClick={() => leaveChat(activeChat._id)}
              onDeleteClick={() => deleteChat(activeChat._id)}
            />
          </Typography>

        </React.Fragment>
      ) : (
        <Typography variant="title" className={classes.appBarTitle}>
          DogeCodes React Chat
        </Typography>
      )}
      <UserMenu
        activeUser={activeUser}
        onClickEditUserInfo={editUserInfo}
        onClickLogout={() => logout()}
      />
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(ChatHeader);
