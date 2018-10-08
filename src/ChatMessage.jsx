import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    messageWrapper: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
    },
    messageWrappperFromMe: {
        justifyContent: 'flex-end',
    },
    message: {
        maxWidth: '70%',
        minWidth: '10%',
        padding: theme.spacing.unit,
        marginLeft: theme.spacing.unit * 2,
    },
    messageFromMe: {
        marginRight: theme.spacing.unit * 2,
        backgroundColor: '#e6dcff',
    },
    statusMessage: {
        width: '100%',
        textAlign: 'center',
    },
    statusMessageUser: {
        display: 'inline',
    },
});

function PaperSheet(props) {
    const { classes } = props;

    return (
        <div>
            <Paper className={classes.messageFromMe}>
                <Typography variant="caption">
                    {'ann'}
                </Typography>
                <Typography variant="body1">{'Some message'}</Typography>
                <Typography variant="caption" className={''}>
                    1 min ago.
                </Typography>
            </Paper>
        </div>
    );
}

export default withStyles(styles)(PaperSheet);
