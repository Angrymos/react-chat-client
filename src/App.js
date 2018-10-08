import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ChatMessage from './components/Chat/ChatMessage';
import SideBar from './components/Sidebar'
import ChatHeader from './components/ChatHeader'
import { chatList, messages } from './mock-data';
import MessageInput from './components/Chat/MessageInput';
import Chat from './components/Chat';

const drawerWidth = 320;

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

class App extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <main className={classes.root}>
        <div className={classes.appFrame}>
          <ChatHeader />
          <SideBar chatList={chatList} />
          <Chat/>
        </div>
      </main>
    );
  }
}

export default withStyles(styles)(App);
