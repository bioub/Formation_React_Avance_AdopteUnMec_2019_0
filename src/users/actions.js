import { USER_FETCH, USER_FETCH_SUCCESS, USER_CREATE, USER_CREATE_SUCCESS } from './constants';
import { getAll, create } from './api/users';
import { selectUsersItems } from './selectors';

export function userCreateRequested(user) {
  return async function(dispatch, getState) {
    dispatch(userCreate());
    const userCreated = await create(user);
    dispatch(userCreateSuccess(userCreated));
  };
}

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


export function userCreate() {
  return {
    type: USER_CREATE,
  };
}

export function userCreateSuccess(user) {
  return {
    type: USER_CREATE_SUCCESS,
    payload: user,
  };
}
