import * as types from '../constants/users';
import callApi from '../../utils/call-api';

export function editUserInfo(username, firstName, lastName) {
  return (dispatch, getState) => {
    const { token } = getState().auth;

    dispatch({
      type: types.EDIT_USER_INFO_REQUEST,
    });

    return callApi('/users/me', token, { method: 'POST' }, {
      username,
      firstName,
      lastName,
    })
      .then(data => {
        dispatch({
          type: types.EDIT_USER_INFO_SUCCESS,
          payload: data,
        });
      })
      .catch(reason => dispatch({
        type: types.EDIT_USER_INFO_FAILURE,
        payload: reason,
      }));
  };
}

