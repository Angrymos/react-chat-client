import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Input from '@material-ui/core/Input';
import ChatList from './ChatList';
import FloatingActionButtons from './FloatingActionButtons';
import BottomMenuNavigation from './BottomMenuNavigation';
import Grid from '@material-ui/core/Grid';

const drawerWidth = 320;

const styles = theme => ({
    textField: {
        paddingLeft: 24,
        paddingRight: 24,
        width: '100%',
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
});

class ChatMenu extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Drawer
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <TextField
                    id="standard-with-placeholder"
                    placeholder="Search chats"
                    className={classes.textField}
                    margin="normal"
                />
                <Divider />
                <ChatList/>
                <BottomMenuNavigation/>
            </Drawer>
        );
    }
}

export default withStyles(styles)(ChatMenu);
