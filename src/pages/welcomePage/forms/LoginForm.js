import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button/Button';

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

class LoginForm extends React.Component {
  state = {
    username: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    },
  };

  handleOnChangeInput = (event) => {
    event.persist();
    const { name, value } = event.target;

    this.setState(prevState => ({
      [name]: {
        ...prevState[name],
        value: value,
      },
    }));
  };

  handleOnClickSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    this.props.onSubmit(username.value, password.value);
  };

  render() {
    const { classes } = this.props;
    const { username, password } = this.state;

    return (
      <form onSubmit={this.handleOnClickSubmit}>
        <div className={classes.container}>
          <TextField
            required
            label='Username'
            placeholder='Type your username...'
            name='username'
            className={classes.input}
            value={username.value}
            onChange={this.handleOnChangeInput}
            error={!username.isValid}
          />
          <TextField
            required
            label='Password'
            placeholder='Type your password...'
            type='password'
            name='password'
            className={classes.input}
            value={password.value}
            onChange={this.handleOnChangeInput}
            error={!password.isValid}
          />
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            type='submit'
          >
            Login
          </Button>
        </div>
      </form>
    );
  }
};

export default withStyles(styles)(LoginForm);
