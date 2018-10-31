import React from 'react';
import PropTypes from 'prop-types';
import MUIAvatar from '@material-ui/core/Avatar';
import getColor from '../utils/color-from';
import titleInitials from '../utils/title-initial';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
};

const Avatar = ({ classes, colorFrom, children, ...rest }) => (
  <div className={classes.row}>
    <MUIAvatar style={{ backgroundColor: getColor(colorFrom), margin: 10 }} {...rest}>
      {titleInitials(children)}
    </MUIAvatar>
  </div>
);

Avatar.propTypes = {
  colorFrom: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default withStyles(styles)(Avatar);
