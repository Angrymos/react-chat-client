import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import Explore from '@material-ui/icons/Explore';

const styles = {
  root: {
    width: 319,
  },
};

const BottomMenuNavigation = ({ classes }) => (
  <BottomNavigation
    showLabels
    className={classes.root}
  >
    <BottomNavigationAction label='My Chats' icon={<RestoreIcon />} />
    <BottomNavigationAction label='Explore' icon={<Explore />} />
  </BottomNavigation>
);

export default withStyles(styles)(BottomMenuNavigation);
