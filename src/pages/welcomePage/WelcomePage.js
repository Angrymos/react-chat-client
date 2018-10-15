import React from 'react';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Header from './Header';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import Paper from '@material-ui/core/Paper';
import LoginForm from './forms/LoginForm';
import SignupForm from './forms/SignupForm';

const styles = theme => ({
  formWrapper: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 500,
    marginTop: 88,
  },
});

class WelcomePage extends React.Component {
  state = {
    activeTab: 0,
  };

  handleOnChangeActiveTab = (event, activeTab) => {
    this.setState({ activeTab });
  };

  render() {
    const { classes, theme, signup, login, isAuthenticated } = this.props;
    const { activeTab } = this.state;

    if (isAuthenticated) {
      return (
        <Redirect to='/chat' />
      );
    }
    return (
      <>
        <Header />
        <div className={classes.formWrapper}>
          <Paper elevation={4} className={classes.root}>
            <AppBar position='static' color='default'>
              <Tabs
                value={activeTab}
                onChange={this.handleOnChangeActiveTab}
                fullWidth
              >
                <Tab label='LOGIN' />
                <Tab label='SIGN UP' />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={activeTab}
              onChangeIndex={this.handleOnChangeActiveTab}
            >
              <LoginForm onSubmit={login} />
              <SignupForm onSubmit={signup} />
            </SwipeableViews>
          </Paper>
        </div>
      </>
    );
  }
}

export default withStyles(styles, { withTheme: true })(WelcomePage);
