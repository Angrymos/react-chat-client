import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import ListItemText from '@material-ui/core/ListItemText';
import deepPurple from '../../../../node_modules/@material-ui/core/colors/deepPurple';
import Avatar from '../../../components/Avatar';
import { Link } from 'react-router-dom';
import ListItem from '../../../../node_modules/@material-ui/core/ListItem/ListItem';
import { Route } from 'react-router-dom';

const styles = theme => ({
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
});

class ChatListItem extends React.Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    disabled: PropTypes.bool.isRequired,
    chat: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
    active: PropTypes.bool.isRequired,
    setActiveChat: PropTypes.func.isRequired,
  };

  handleOnClick = (history, chat) => () => {
    if (this.props.disabled) return;
    history.push(`/chat/${chat._id}`);
  };

  render() {
    const { classes, value, active, chat } = this.props;

    return (
      <Route
        render={({ history }) => (
          <ListItem
            button
            component={Link}
            to={`/chat/${chat._id}`}
            className={active ? classes.activeItem : ''}
            key={value}
            onClick={this.handleOnClick(history, chat)}
          >
            <Avatar colorFrom={chat.title}>{chat.title}</Avatar>
            <ListItemText primary={chat.title} secondary={moment(chat.createdAt).fromNow()} />
          </ListItem>
        )}
      />
    );
  };
}


export default withStyles(styles)(ChatListItem);
