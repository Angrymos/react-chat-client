import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllChats, setActiveChat, fetchMyChats, deleteChat, createChat, joinChat, leaveChat, sendMessage } from '../actions/chats';
import { logout } from '../actions/auth';
import { editUserInfo } from '../actions/users';
import * as chatsSelector from '../reducers/chats';
import * as usersSelector from '../reducers/index';
import ChatPage from '../../pages/ChatPage';

const mapStateToProps = state => {
  const activeChat = chatsSelector.getById(state.chats, state.chats.activeId);

  return {
    isAuthenticated: state.auth.isAuthenticated,
    chats: {
      active: activeChat,
      my: chatsSelector.getByIds(state.chats, state.chats.myIds),
      all: chatsSelector.getByIds(state.chats, state.chats.allIds),
    },
    activeUser: {
      ...state.auth.user,
      isMember: usersSelector.isMember(state, activeChat),
      isChatMember: usersSelector.isChatMember(state, activeChat),
      isCreator: usersSelector.isCreator(state, activeChat),
    },

    messages: state.messages,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  logout,
  editUserInfo,
  joinChat,
  leaveChat,
  deleteChat,
  createChat,
  sendMessage,
  fetchAllChats,
  fetchMyChats,
  setActiveChat,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatPage);
