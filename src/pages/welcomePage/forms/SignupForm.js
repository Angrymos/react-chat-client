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

class SignupForm extends React.Component {
  state = {
    username: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    },
    repeatedPassword: {
      value: '',
      isValid: true,
    },
  };

  validate = () => {
    const { password, repeatedPassword } = this.state;
    const isValid = password.value === repeatedPassword.value;

    this.setState({
      password: { ...password, isValid },
      repeatedPassword: { ...repeatedPassword, isValid },
    });

    return isValid;
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
    if (!this.validate()) return;

    const { username, password } = this.state;

    this.props.onSubmit(username.value, password.value);
  };

  render() {
    const { classes } = this.props;
    const { username, password, repeatedPassword } = this.state;

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
          <TextField
            required
            label='Repeat password'
            placeholder='Repeat your password...'
            type='password'
            name='repeatedPassword'
            className={classes.input}
            value={repeatedPassword.value}
            onChange={this.handleOnChangeInput}
            error={!repeatedPassword.isValid}
          />
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            type='submit'
          >
            Sign up
          </Button>
        </div>
      </form>
    );
  }
};

export default withStyles(styles)(SignupForm);
