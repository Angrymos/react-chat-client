import React from 'react';
import PermanentDrawer from './PermanentDrawer';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },
});

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <PermanentDrawer/>
      </div>
  );
  }
}

export default withStyles(styles)(App);
