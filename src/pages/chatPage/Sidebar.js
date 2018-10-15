import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import ChatList from './sideBar/ChatList';
import BottomMenuNavigation from './sideBar/BottomMenuNavigation';

const styles = theme => ({
  drawerPaper: {
    position: 'absolute',
    width: 320,
  },
  drawerHeader: {
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
  textField: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 7,
    width: '100%',
  },
  addButton: {
    position: 'absolute',
    left: 'auto',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48,
  },
});

const Sidebar = ({ classes, chatList }) => (
  <Drawer
    variant='permanent'
    classes={{ paper: classes.drawerPaper }}
  >
    <div className={classes.drawerHeader}>
      <TextField
        id='standard-with-placeholder'
        placeholder='Search chats'
        className={classes.textField}
        margin='normal'
      />
    </div>
    <Divider />
    <ChatList chatList={chatList} />
    <Button variant='fab' color='primary' aria-label='Add' className={classes.addButton}>
      <AddIcon />
    </Button>
    <BottomMenuNavigation />
  </Drawer>
);

export default withStyles(styles)(Sidebar);
