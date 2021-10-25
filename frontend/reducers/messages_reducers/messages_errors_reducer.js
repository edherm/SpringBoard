import {
  RECEIVE_MESSAGES,
  RECEIVE_MESSAGE,
  RECEIVE_MESSAGE_ERRORS,
} from '../../actions/message_actions';

const _nullErrors = [];

export default (oldState = _nullErrors, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_MESSAGE_ERRORS:
      return [action.errors];
    case RECEIVE_MESSAGES:
      return _nullErrors;
    case RECEIVE_MESSAGE:
      return _nullErrors;
    default:
      return oldState;
  }
};
