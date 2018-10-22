import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllChats, setActiveChat, fetchMyChats } from '../actions/chats';
import * as chatsSelector from '../reducers/chats';
import ChatPage from '../../pages/ChatPage';

const mapStateToProps = state => ({
  chats: chatsSelector.getByIds(state.chats, state.chats.allIds)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAllChats,
  fetchMyChats,
  setActiveChat
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatPage);
