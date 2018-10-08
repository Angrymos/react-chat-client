import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import LetterAvatar from './LetterAvatar';
import deepPurple from '../node_modules/@material-ui/core/colors/deepPurple';

const styles = theme => ({
    purpleAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepPurple[500],
    },
});

class ChatItem extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <ListItem key={this.props.value} dense button className="">
                <Avatar className={classes.purpleAvatar}>OP</Avatar>
                <ListItemText primary={this.props.value} secondary="3 weeks ago" />
            </ListItem>
        );
    }
}

export default withStyles(styles)(ChatItem);
