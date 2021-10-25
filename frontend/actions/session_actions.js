import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const DISMISS_ERRORS = 'DISMISS_ERRORS';

// Actions

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
  };
};

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const dismissErrors = () => ({
  type: DISMISS_ERRORS,
});

// Thunk action creators

export const signup = (user) => (dispatch) => {
  return SessionAPIUtil.signup(user).then(
    (user) => {
      return dispatch(receiveCurrentUser(user));
    },
    (errors) => {
      return dispatch(receiveErrors(errors.responseJSON));
    }
  );
};

export const login = (user) => (dispatch) =>
  SessionAPIUtil.login(user).then(
    (user) => {
      dispatch(receiveCurrentUser(user));
      return user;
    },
    (errors) => {
      return dispatch(receiveErrors(errors.responseJSON));
    }
  );

export const logout = () => (dispatch) =>
  SessionAPIUtil.logout().then(
    () => {
      return dispatch(logoutCurrentUser());
    },
    (errors) => {
      return dispatch(receiveErrors(errors.responseJSON));
    }
  );
