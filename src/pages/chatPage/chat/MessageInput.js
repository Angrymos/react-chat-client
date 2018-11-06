import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Button from '../../../../node_modules/@material-ui/core/Button/Button';

const styles = theme => ({
  messageInputWrapper: {
    position: 'fixed',
    left: 'auto',
    right: 32,
    bottom: 0,
    width: 'calc(100% - 352px)',
    padding: theme.spacing.unit * 3,
  },

  messageInput: {
    padding: theme.spacing.unit * 2,
  },
});

class MessageInput extends React.Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,

    disabled: PropTypes.bool.isRequired,
    showJoinButton: PropTypes.bool.isRequired,

    onClickJoin: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
  };

  state = {
    value: '',
  };

  handleOnChangeInput = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  handleOnKeyPress = (event) => {
    const { value } = this.state;

    if (event.key === 'Enter' && value) {
      this.props.sendMessage(value);
      this.setState({ value: '' });
    }
  };

  render() {
    const { classes, onClickJoin, showJoinButton, disabled } = this.props;
    return (
      <div className={classes.messageInputWrapper}>
        <Paper className={classes.messageInput} elevation={6}>
          {showJoinButton ? (
            <Button
              disabled={disabled}
              fullWidth
              variant='raised'
              color='primary'
              onClick={onClickJoin}
            >
              Join
            </Button>
          ) : (
            <Input
              disabled={disabled}
              fullWidth
              placeholder='Type your message…'
              value={this.state.value}
              onChange={this.handleOnChangeInput}
              onKeyPress={this.handleOnKeyPress}
            />
          )}
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(MessageInput);
