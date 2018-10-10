import React from 'react';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper'
import LoginForm from './TabMenu/LoginForm';
import SignupForm from './TabMenu/SignupForm';

const styles = theme => ({
  root: {
    position: 'relative',
    minHeight: 200,
  },
});

class TabMenu extends React.Component {
  state = {
    activeTab: 0,
  };

  handleOnChangeActiveTab = (event, activeTab) => {
    this.setState({ activeTab });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeTab } = this.state;

    return (
      <Paper elevation={4} className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={activeTab}
            onChange={this.handleOnChangeActiveTab}
            fullWidth
          >
            <Tab label="LOGIN" />
            <Tab label="SIGN UP" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeTab}
          onChangeIndex={this.handleOnChangeActiveTab}
        >
         <LoginForm />
         <SignupForm />
        </SwipeableViews>
      </Paper>
    );
  }
}

export default withStyles(styles, { withTheme: true })(TabMenu);
