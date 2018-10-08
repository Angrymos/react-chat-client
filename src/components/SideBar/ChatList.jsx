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
import ChatItem from './ChatItem';
import Drawer from '@material-ui/core/Drawer';

const styles = theme => ({
    chatsList: {
        height: 'calc(100% - 56px)',
        overflowY: 'scroll',
    },

    purpleAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepPurple[500],
    },
});

const ChatList = ({ classes, chatList }) => (
    <List className={classes.chatsList}>
        {chatList.map((chat, index) => (
            <ChatItem
                key={index}
                chat={chat}
            />
        ))}
    </List>
);

export default withStyles(styles)(ChatList);
