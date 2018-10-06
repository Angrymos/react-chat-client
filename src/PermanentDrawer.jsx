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
import AvatarList from './AvatarList';
import FloatingActionButtons from './FloatingActionButtons';
import SimpleBottomNavigation from './SimpleBottomNavigation';

const drawerWidth = 320;

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    appFrame: {
        height: 440,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
    },
    'appBar-left': {
        marginLeft: drawerWidth,
    },
    'appBar-right': {
        marginRight: drawerWidth,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
});

class PermanentDrawer extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
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
                        <AvatarList/>
                        <FloatingActionButtons/>
                        <SimpleBottomNavigation/>
                    </Drawer>
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        <Typography>{'You think water moves fast? You should see ice.'}</Typography>
                    </main>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(PermanentDrawer);
