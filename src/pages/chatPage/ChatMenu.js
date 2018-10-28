import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { withStyles } from '@material-ui/core/styles';

class ChatMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleOnClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleOnClose = () => {
    this.setState({ anchorEl: null });
  };

  handleOnClickDelete = () => {
    this.handleOnClose();
    this.props.onClickDelete();
  };

  handleOnClickLeave = () => {
    this.handleOnClose();
    this.props.onClickLeave();
  };

  render() {
    const { anchorEl } = this.state;
    const { activeUser } = this.props;
    const open = Boolean(anchorEl);

    if (!activeUser.isChatMember) {
      return null;
    }

    return (
      <div>
        <IconButton
          aria-label='More'
          aria-owns={open ? 'long-menu' : null}
          aria-haspopup='true'
          onClick={this.handleOnClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id='long-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleOnClose}
        >
          {activeUser.isMember && <MenuItem onClick={this.handleOnClickLeave}>Leave</MenuItem>}
          {activeUser.isCreator && <MenuItem onClick={this.handleOnClickDelete}>Delete</MenuItem>}
        </Menu>
      </div>
    );
  }
}

export default ChatMenu;