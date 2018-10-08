import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import LetterAvatar from '../LetterAvatar';
import deepPurple from '../../../node_modules/@material-ui/core/colors/deepPurple';
import titleInitials from '../../Utils/TitleInitial';

const styles = theme => ({
    purpleAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepPurple[500],
    },
});

const ChatItem = ({classes, value, chat}) => (
    <ListItem key={value} dense button className="">
      <Avatar className={classes.purpleAvatar}>{titleInitials(chat.title)}</Avatar>
      <ListItemText primary={chat.title} secondary="3 weeks ago" />
    </ListItem>
);

export default withStyles(styles)(ChatItem);
