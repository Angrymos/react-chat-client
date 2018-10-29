import * as types from '../constants/chats';
import callApi from '../../utils/call-api';
import { redirect } from './services';

export const fetchMyChats = () => (dispatch, getState) => {
  const { token } = getState().auth;

  dispatch({
    type: types.FETCH_MY_CHATS_REQUEST,
  });

  return callApi('/chats/my', token)
    .then(data => dispatch({
      type: types.FETCH_MY_CHATS_SUCCESS,
      payload: data,
    }))
    .catch(reason => dispatch({
      type: types.FETCH_MY_CHATS_FAILURE,
      payload: reason,
    }));
};

export const fetchAllChats = () => (dispatch, getState) => {
  const { token } = getState().auth;

  dispatch({
    type: types.FETCH_ALL_CHATS_REQUEST,
  });

  return callApi('/chats', token)
    .then(data => dispatch({
      type: types.FETCH_ALL_CHATS_SUCCESS,
      payload: data,
    }))
    .catch(reason => dispatch({
      type: types.FETCH_ALL_CHATS_FAILURE,
      payload: reason,
    }));
};

export const fetchChat = (chatId) => (dispatch, getState) => {
  const { token } = getState().auth;

  dispatch({
    type: types.FETCH_CHAT_REQUEST,
  });

  return callApi(`/chats/${chatId}`, token)
    .then(data => {
      dispatch({
        type: types.FETCH_CHAT_SUCCESS,
        payload: data,
      });

      return data;
    })
    .catch(reason => dispatch({
      type: types.FETCH_CHAT_FAILURE,
      payload: reason,
    }));
};

export const setActiveChat = (chatId) => (dispatch) => {
  return dispatch(fetchChat(chatId))
    .then(data => {
      if (!data) {
        dispatch(redirect('/chats'));

        return dispatch({
          type: types.UNSET_ACTIVE_CHAT,
        });
      }

      dispatch({
        type: types.SET_ACTIVE_CHAT,
        payload: data,
      });

      return data;
    });
};

export const deleteChat = (chatId) => (dispatch, getState) => {
  console.log('delete', chatId);
  const { token } = getState().auth;

  dispatch({
    type: types.DELETE_CHAT_REQUEST,
    payload: chatId,
  });

  return callApi(`/chats/${chatId}`, token, { method: 'DELETE' })
    .then((data) => {
      dispatch({
        type: types.DELETE_CHAT_SUCCESS,
        payload: data,
      });

      dispatch(redirect('/chats'));

      dispatch({
        type: types.UNSET_ACTIVE_CHAT,
      });

      return data;
    })
    .catch(reason =>
      dispatch({
        type: types.DELETE_CHAT_FAILURE,
        payload: reason,
      }));
};

export const createChat = (title) => (dispatch, getState) => {
  const { token } = getState().auth;

  dispatch({
    type: types.CREATE_CHAT_REQUEST,
    payload: { title },
  });

  return callApi('/chats', token, { method: 'POST' }, {
    data: { title },
  })
    .then(({ chat }) => {
      dispatch({
        type: types.CREATE_CHAT_SUCCESS,
        payload: { chat },
      });

      dispatch(redirect(`/chats/${chat._id}`));

      return chat;
    })
    .catch(reason =>
      dispatch({
        type: types.CREATE_CHAT_FAILURE,
        payload: reason,
      }));
};

export const joinChat = (chatId) => (dispatch, getState) => {
  const { token } = getState().auth;

  dispatch({
    type: types.JOIN_CHAT_REQUEST,
    payload: { chatId },
  });

  return callApi(`/chats/${chatId}/join`, token)
    .then(({ chat }) => {
      dispatch({
        type: types.JOIN_CHAT_SUCCESS,
        payload: { chat },
      });

      dispatch(redirect(`/chats/${chat._id}`));

      return chat;
    })
    .catch(reason =>
      dispatch({
        type: types.JOIN_CHAT_FAILURE,
        payload: reason,
      }));
};

export const leaveChat = (chatId) => (dispatch, getState) => {
  const { token } = getState().auth;

  dispatch({
    type: types.LEAVE_CHAT_REQUEST,
    payload: { chatId },
  });

  return callApi(`/chats/${chatId}/leave`, token)
    .then(data => {
      dispatch({
        type: types.LEAVE_CHAT_SUCCESS,
        payload: data,
      });

      dispatch(fetchMyChats());
      dispatch(fetchAllChats());

      dispatch({
        type: types.UNSET_ACTIVE_CHAT,
      });

      return data;
    })
    .catch(reason =>
      dispatch({
        type: types.LEAVE_CHAT_FAILURE,
        payload: reason,
      }));
};
