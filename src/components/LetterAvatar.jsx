import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';
import classnames from 'classnames';

import titleInitials from '../Utils/TitleInitial';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    color: '#fff',
    margin: 10,
  },
  orangeAvatar: {
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    backgroundColor: deepPurple[500],
  },
};

const LetterAvatar =  (props) => {
  const { classes } = props;
  const isMessageFromMe = props.sender === 'me';
  console.log(isMessageFromMe);

  return (
    <div className={classes.row}>
      <Avatar
        className={classnames(
          classes.avatar,
          isMessageFromMe ? classes.orangeAvatar : classes.purpleAvatar,
        )}
      >
        {titleInitials(props.sender)}</Avatar>
    </div>
  );
};

export default withStyles(styles)(LetterAvatar);
