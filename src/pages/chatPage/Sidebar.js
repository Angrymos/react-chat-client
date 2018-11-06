import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '../../../node_modules/@material-ui/icons/Restore';
import Explore from '../../../node_modules/@material-ui/icons/Explore';
import ChatList from './sideBar/ChatList';

const styles = {
  bottomNavigation: {
    width: 319,
  },
  drawerPaper: {
    position: 'absolute',
    width: 320,
  },
  drawerHeader: {
    paddingLeft: 24,
    paddingRight: 24,
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
    right: 24,
    bottom: 72,
  },
  modalWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '30%',
    minWidth: '300px',
    padding: 24,
  },
};

class Sidebar extends React.Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    isConnected: PropTypes.bool.isRequired,
    chats: PropTypes.shape({
      active: PropTypes.object,
      my: PropTypes.array.isRequired,
      all: PropTypes.array.isRequired,
    }).isRequired,
    onClickCreateChat: PropTypes.func.isRequired,
    setActiveChat: PropTypes.func.isRequired,
  };

  state = {
    isModalOpen: false,
    title: '',
    activeTab: 0,
    searchValue: '',
  };

  handleOnToggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleOnChangeSearchValue = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  handleOnClickCreate = () => {
    this.props.onClickCreateChat(this.state.title);
    this.handleOnToggleModal();
  };

  handleOnChangeTab = (event, value) => {
    this.setState({
      activeTab: value,
    });
  };

  filterChats = (chats) => {
    const { searchValue } = this.state;

    return chats
      .filter(chat => chat.title.toLowerCase().includes(searchValue.toLowerCase()))
      .sort((one, two) => (one.title.toLowerCase() <= two.title.toLowerCase() ? -1 : 1));
  };

  render() {
    const { classes, chats, setActiveChat, isConnected } = this.props;
    const { isModalOpen, title, activeTab, searchValue } = this.state;

    return (
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
            value={searchValue}
            onChange={this.handleOnChangeSearchValue}
          />
        </div>
        <Divider />
        <ChatList
          disabled={!isConnected}
          chats={this.filterChats(activeTab === 0 ? chats.my : chats.all)}
          activeChat={chats.active}
          setActiveChat={setActiveChat}
        />
        <Button
          variant='fab'
          color='primary'
          aria-label='Add'
          onClick={this.handleOnToggleModal}
          className={classes.addButton}
          disabled={!isConnected}
        >
          <AddIcon />
        </Button>
        <Modal
          open={isModalOpen}
          className={classes.modalWrapper}
          onClose={this.handleOnToggleModal}
        >
          <Paper className={classes.modal}>
            <Typography variant='title' id='modal-title'>
              Create new chat
            </Typography>
            <TextField
              required
              fullWidth
              name='chatname'
              label='New name'
              type='text'
              margin='normal'
              value={title}
              onChange={this.handleOnChangeTitle}
            />
            <Button color='primary' onClick={this.handleOnClickCreate}>
              Create
            </Button>
          </Paper>
        </Modal>
        <BottomNavigation
          value={activeTab}
          onChange={this.handleOnChangeTab}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction label='My Chats' icon={<RestoreIcon />} />
          <BottomNavigationAction label='Explore' icon={<Explore />} />
        </BottomNavigation>
      </Drawer>
    );
  }
}

export default withStyles(styles)(Sidebar);
