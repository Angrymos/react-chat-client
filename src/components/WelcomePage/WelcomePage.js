import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Header from './Components/Header';
import TabMenu from './Components/TabMenu';
import Button from '@material-ui/core/Button/Button';
import Login from './Components/TabMenu/Login';
import SignUp from './Components/TabMenu/SignUp';
import SwipeableViews from 'react-swipeable-views';

const styles = theme => ({
  appBar: {
    width: 'calc(100% - ${320}px)',
  },
  formWrapper: {
    backgroundColor: '#dddfff',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 500,
    marginTop: 88,
  },
});

const WelcomePage = ({ classes, theme }) => (
  <>
    <Header />
    <div className={classes.formWrapper}>
      <TabMenu/>
    </div>
  </>
);

export default withStyles(styles)(WelcomePage);
