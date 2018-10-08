import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  messageInput: {
    padding: theme.spacing.unit * 2,
  },
});

const MessageInput = ({ classes }) => (
  <Paper className={classes.messageInput} elevation={6}>
    <Input
      fullWidth
      placeholder='Type your message…'
    />
  </Paper>
);

export default withStyles(styles)(MessageInput);
