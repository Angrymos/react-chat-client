import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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
    const { activeUser, disabled } = this.props;
    const open = Boolean(anchorEl);

    if (!activeUser.isChatMember) {
      return null;
    }

    return (
      <>
        <IconButton
          color='inherit'
          aria-label='More'
          aria-owns={open ? 'long-menu' : null}
          aria-haspopup='true'
          disabled={disabled}
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
      </>
    );
  }
}

export default ChatMenu;
