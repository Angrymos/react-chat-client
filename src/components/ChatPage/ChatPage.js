import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ChatHeader from '../ChatHeader';
import Sidebar from './SideBar/Sidebar';
import Chat from './Chat/Chat';
import { chatList, messages } from '../../mock-data';

const styles = theme => ({
  root: {
    flexGrow: 1,

  },
  appFrame: {
    height: '100%',
    width: '100%',
    display: 'flex',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
  },
});

const ChatPage = ({ classes }) => (
  <main className={classes.root}>
    <div className={classes.appFrame}>
      <ChatHeader />
      <Sidebar chatList={chatList} />
      <Chat messages={messages} />
    </div>
  </main>
);

export default withStyles(styles)(ChatPage);
