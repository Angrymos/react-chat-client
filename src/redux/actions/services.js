//import history from '../../utils/history';
//import * as types from '../constants';

// export function redirect(to) {
//   return(dispatch) => {
//     history.push(`${process.env.PUBLIC_URL}/${to}`);
//
//     dispatch({
//       type: types.REDIRECT,
//       payload: { to },
//     });
//   }
// }

import * as types from '../constants/services';
import history from '../../utils/history';

export const redirect = (to) => (dispatch) => {
  history.push(to);
  dispatch({
    type: types.REDIRECT,
    payload: { to },
  });
};
