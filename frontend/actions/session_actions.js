import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


// Actions

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
})

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
})

// Thunk action creators

export const signup = user => dispatch => {
  // debugger
  return SessionAPIUtil.signup(user)
    .then(user => {
      debugger
      return dispatch(receiveCurrentUser(user))
    }, errors => {
      debugger
      return dispatch(receiveErrors(errors.responseJSON))
    })
}

export const login = user => dispatch => (
  SessionAPIUtil.login(user)
    .then(user => {
      return dispatch(receiveCurrentUser(user))
    }, errors => {
      return dispatch(receiveErrors(errors.responseJSON))
    })
)

export const logout = () => dispatch => (
  SessionAPIUtil.logout()
  .then(() => {
    return dispatch(logoutCurrentUser())
  }, errors => {
    return dispatch(receiveErrors(errors.responseJSON))
  })
)