import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import ListItemText from '@material-ui/core/ListItemText';
import deepPurple from '../../../../node_modules/@material-ui/core/colors/deepPurple';
import Avatar from '../../../components/Avatar';
import { Link } from 'react-router-dom';
import ListItem from '../../../../node_modules/@material-ui/core/ListItem/ListItem';

const styles = theme => ({
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
});


class ChatListItem  extends React.Component {
  handleOnClickChat = () => {
    this.props.setActiveChat(this.props.chat._id);
  };

  render() {
    const { classes, value, active, chat} = this.props;

    return(
      <ListItem
        button
        component={Link}
        to={`/chat/${chat._id}`}
        className={active ? classes.activeItem : ''}
        key={value}
        onClick={this.handleOnClickChat}
      >
        <Avatar colorFrom={chat.title}>{chat.title}</Avatar>
        <ListItemText primary={chat.title} secondary={moment(chat.createdAt).fromNow()}/>
      </ListItem>
    )
  }
}

export default withStyles(styles)(ChatListItem);
