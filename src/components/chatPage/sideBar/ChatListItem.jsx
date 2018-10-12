import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import deepPurple from '../../../../node_modules/@material-ui/core/colors/deepPurple';
import titleInitials from '../../../utils/title-initial';
import Avatar from '../../Avatar';

const styles = theme => ({
    purpleAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepPurple[500],
    },
});

const ChatListItem = ({classes, value, chat}) => (
    <ListItem key={value}>
      <Avatar colorFrom={chat.title}>{chat.title}</Avatar>
      <ListItemText primary={chat.title} secondary="3 weeks ago" />
    </ListItem>
);

export default withStyles(styles)(ChatListItem);
