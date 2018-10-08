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
import Grid from '@material-ui/core/Grid';
import ChatMenu from './ChatMenu';
import ChatMessage from './ChatMessage';
import Paper from '@material-ui/core/Paper';

const drawerWidth = 320;

const styles = theme => ({
    chatLayout: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '64px',
        height: '100%',
        width: '100%',
        overflow: 'hidden',
    },
    root: {
        flexGrow: 1,
    },
    appFrame: {
        height: '100%',
        width: '100%',
        display: 'flex',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
    },

    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
    messageInputWrapper: {
        position: 'fixed',
        left: 'auto',
        right: 0,
        bottom: 0,
        width: 'calc(100% - 320px)',
        padding: theme.spacing.unit * 3,
    },
    messageInput: {
        padding: theme.spacing.unit * 2,
    },
});

class PermanentDrawer extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <main className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar
                        position="absolute"
                        className={classes.appBar}
                    >
                        <Toolbar>
                            <Typography variant="title" color="inherit" noWrap>
                                DogeCodes React chat
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <ChatMenu/>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <ChatMessage/>
                    <div className={classes.messageInputWrapper}>
                        <Paper className={classes.messageInput} elevation={6}>
                            <Input
                                fullWidth
                                placeholder="Type your message…"
                            />
                        </Paper>
                    </div>

                </main>
                </div>
            </main>
        );
    }
}

export default withStyles(styles)(PermanentDrawer);
