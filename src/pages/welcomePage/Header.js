import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  appBar: {
    width: '100%',
  },
});

const Header = ({ classes }) => (
  <AppBar position='absolute' className={classes.appBar}>
    <Toolbar>
      <Typography variant='title' color='inherit' noWrap>
        DogeCodes React chat
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Header);
