import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Header from './Components/Header';
import TabMenu from './Components/TabMenu';

const styles = theme => ({
  formWrapper: {
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
