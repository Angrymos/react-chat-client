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

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

class AvatarList extends React.Component {
    state = {
        checked: [1],
    };

    handleToggle = value => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <List>
                    {["Chat", "DogeCode", "ReactChat", "C#"].map(value => (
                        <ListItem key={value} dense button className={classes.listItem}>
                            <LetterAvatar />
                            <ListItemText primary={value} secondary="3 weeks ago" />
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }
}

export default withStyles(styles)(AvatarList);
