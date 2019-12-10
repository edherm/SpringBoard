import React from "react";
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../../actions/session_actions";

const _nullUser = {
  id: null
};

export default (oldState = _nullUser, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { [action.user.id]: action.user.id})
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return oldState;
  }
}