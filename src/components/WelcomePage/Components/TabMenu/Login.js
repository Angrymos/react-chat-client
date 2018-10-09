import React from 'react';
import Input from '@material-ui/core/Input/Input';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper/Paper';

const styles = theme => ({
  container: {
    padding: 24,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  input: {
    flex: '1 1 auto',
    marginTop: 16,
    marginBottom: 8,
  },
  button: {
    marginTop: 16,
  },
});

const Login = ({ classes, dir }) => (
  <div dir={dir} className={classes.container}>
    <Input
      placeholder='Username'
      className={classes.input}
      inputProps={{
        'aria-label': 'Description',
      }}
    />
    <Input
      placeholder='Password'
      className={classes.input}
      inputProps={{
        'aria-label': 'Description',
      }}
    />
    <Button variant='contained' color='primary' className={classes.button}>
      Login
    </Button>
  </div>
);

export default withStyles(styles)(Login);
