import React from 'react';
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
    const { classes, onClickJoin, showJoinButton } = this.props;
    return (
      <div className={classes.messageInputWrapper}>
        <Paper className={classes.messageInput} elevation={6}>
          {showJoinButton ? (
            <Button
              fullWidth
              variant='raised'
              color='primary'
              onClick={onClickJoin}
            >
              Join
            </Button>
          ) : (
            <Input
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
