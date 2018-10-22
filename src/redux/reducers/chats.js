import * as types from '../constants/chats';
import { combineReducers } from 'redux';

const initialState = {
  myIds: [],
  allIds: [],
  activeId: '',
  byIds: {},
};

const activeId = (state = initialState.activeId, action) => {
  switch (action.type) {
    case types.SET_ACTIVE_CHAT:
      return action.payload.chat._id;
    case types.UNSET_ACTIVE_CHAT:
      return '';
    default:
      return state;
  }
};

const myIds = (state = initialState.myIds, action) => {
  switch (action.type) {
    case types.FETCH_MY_CHATS_SUCCESS:
      return action.payload.chats.map(geChatId);
    default:
      return state;
  }
};

const allIds = (state = initialState.allIds, action) => {
  switch (action.type) {
    case types.FETCH_ALL_CHATS_SUCCESS:
      return action.payload.chats.map(geChatId);
    default:
      return state;
  }
};

const byIds = (state = initialState.allIds, action) => {
  switch (action.type) {
    case types.FETCH_ALL_CHATS_SUCCESS:
    case types.FETCH_MY_CHATS_SUCCESS:
      return {
        ...state,
        ...action.payload.chats.reduce((ids, chat) => ({
          ...ids,
          [chat._id]: chat,
        }), {}),
      };
    default:
      return state;
  }
};


export const geChatId = (chat) => chat._id;
export const getByIds = (state, ids) => ids.map(id => state.byIds[id]);

export default combineReducers({
  activeId,
  myIds,
  allIds,
  byIds,
});
