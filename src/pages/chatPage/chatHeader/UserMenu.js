import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  menu: {
    position: 'fixed',
    left: 1870,
  },
  modalWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '30%',
    minWidth: '300px',
    padding: theme.spacing.unit * 3,
  },
});

class UserMenu extends React.Component {
  state = {
    anchorEl: null,
    isModalOpen: false,
    username: '',
    firstName: '',
    lastName: '',
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      username: nextProps.activeUser.username,
      firstName: nextProps.activeUser.firstName,
      lastName: nextProps.activeUser.lastName,
    });
  }

  handleOnClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleOnClose = () => {
    this.setState({ anchorEl: null });
  };

  handleOnClickLogout = () => {
    this.props.onClickLogout();
  };

  handleOnChangeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleOnToggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
    this.handleOnClose();
  };

  handleOnClickSave = () => {
    this.props.onClickEditUserInfo({
      username: this.state.username,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    });

    this.handleOnToggleModal();
  };

  render() {
    const { anchorEl, isModalOpen, firstName, lastName, username } = this.state;
    const { classes, disabled } = this.props;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.menu}>
        <IconButton
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
          <MenuItem onClick={this.handleOnToggleModal}>Edit Profile</MenuItem>
          <MenuItem onClick={this.handleOnClickLogout}>Logout</MenuItem>
        </Menu>
        <Modal
          open={isModalOpen}
          className={classes.modalWrapper}
          onClose={this.handleOnToggleModal}
        >
          <Paper className={classes.modal}>
            <Typography variant="title" id="modal-title">
              Edit profile
            </Typography>
            <TextField
              required
              fullWidth
              name="username"
              label="Username"
              type="text"
              margin="normal"
              value={username}
              onChange={this.handleOnChangeInput}
            />
            <TextField
              fullWidth
              name="firstName"
              label="First name"
              type="text"
              margin="normal"
              value={firstName}
              onChange={this.handleOnChangeInput}
            />
            <TextField
              fullWidth
              name="lastName"
              label="Last name"
              type="text"
              margin="normal"
              value={lastName}
              onChange={this.handleOnChangeInput}
            />
            <Button color="primary" onClick={this.handleOnClickSave}>
              Save
            </Button>
            <Button onClick={this.handleOnToggleModal}>Close</Button>
          </Paper>
        </Modal>
      </div>
    );
  }
}

export default withStyles(styles)(UserMenu);
