import { USER_FETCH, USER_FETCH_SUCCESS } from './constants';
import { getAll } from './api/users';
import { selectUsersItems } from './selectors';

export function userFetchRequested() {
  return async function(dispatch, getState) {
    // CACHE
    let users = selectUsersItems(getState());

    if (users.length) {
      return;
    }

    dispatch(userFetch());
    users = await getAll();
    dispatch(userFetchSuccess(users));
  };
}

export function userFetch() {
  return {
    type: USER_FETCH,
  };
}

export function userFetchSuccess(users) {
  return {
    type: USER_FETCH_SUCCESS,
    payload: users,
  };
}
