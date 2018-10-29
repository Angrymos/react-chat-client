import SocketIOClient from 'socket.io-client';
import * as types from '../constants/sockets';
import { redirect } from './services';

export function missingSocketConnection() {
  return {
    type: types.SOCKETS_CONNECTION_MISSING,
  };
}

let socket = null;

export const socketsConnection = () => (dispatch, getState) => {
  const state = getState();
  const { isFetching } = state.services;
  const { token } = state.auth;

  if (isFetching.sockets) {
    return Promise.resolve();
  }

  dispatch({
    type: types.SOCKETS_CONNECTION_REQUEST,
  });

  socket = SocketIOClient('ws://localhost:8000/', {
    query: { token },
  });

  socket.on('connect', () => {
    dispatch({
      type: types.SOCKETS_CONNECTION_SUCCESS,
    });
  });

  socket.on('error', (error) => {
    dispatch({
      type: types.SOCKETS_CONNECTION_FAILURE,
    });
  });

  socket.on('connect_error', () => {
    dispatch({
      type: types.SOCKETS_CONNECTION_FAILURE,
    });
  });

  socket.on('new-message', (message) => {
    dispatch({
      type: types.RECEIVE_MESSAGE,
      payload: message,
    });
  });

  socket.on('new-chat', ({ chat }) => {
    dispatch({
      type: types.RECEIVE_NEW_CHAT,
      payload: { chat },
    });
  });

  socket.on('deleted-chat', ({ chat }) => {
    const { activeId } = getState().chats;

    dispatch({
      type: types.RECEIVE_DELETED_CHAT,
      payload: { chat },
    });

    if (activeId === chat._id) {
      dispatch(redirect('/chat'));
    }
  });
};

export const sendMessage = (content) => (dispatch, getState) => {
  const { activeId } = getState().chats;
  if (!socket) {
    dispatch(missingSocketConnection());
  }

  socket.emit('send-message', {
    chatId: activeId,
    content,
  }, () => {
    dispatch({
      type: types.SEND_MESSAGE,
      payload: {
        chatId: activeId,
        content,
      },
    });
  });
};

export const mountChat = (chatId) => (dispatch) => {
  if (!socket) {
    dispatch(missingSocketConnection());
  }

  socket.emit('mount-chat', chatId);

  dispatch({
    type: types.MOUNT_CHAT,
    payload: { chatId },
  });
};

export const unmountChat = (chatId) => (dispatch) => {
  if (!socket) {
    dispatch(missingSocketConnection());
  }

  socket.emit('unmount-chat', chatId);

  dispatch({
    type: types.UNMOUNT_CHAT,
    payload: { chatId },
  });
};
