import {
  RECEIVE_MESSAGES,
  RECEIVE_MESSAGE,
  REMOVE_MESSAGE
} from "../../actions/message_actions";
import { LOGOUT_CURRENT_USER } from "../../actions/session_actions";

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return Object.assign({}, oldState, action.messages);
    case RECEIVE_MESSAGE:
      return Object.assign({}, oldState, {[action.message.id]: action.message});
    case REMOVE_MESSAGE:
      let nextState = Object.assign({}, oldState);
      delete nextState[action.messageId];
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
}