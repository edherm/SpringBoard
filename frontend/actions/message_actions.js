import * as messageAPIUtil from '../util/messages_api_util';
import { receiveTodoListErrors } from './todo_list_actions';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';
export const RECEIVE_MESSAGE_ERRORS = 'RECEIVE_MESSAGE_ERRORS';

export const receiveMessages = (messages) => {
  return {
    type: RECEIVE_MESSAGES,
    messages,
  };
};

export const receiveMessage = (message) => {
  return {
    type: RECEIVE_MESSAGE,
    message,
  };
};

export const removeMessage = (messageId) => {
  return {
    type: REMOVE_MESSAGE,
    messageId,
  };
};

export const receiveMessageErrors = (errors) => {
  return {
    type: RECEIVE_MESSAGE_ERRORS,
    errors,
  };
};

export const fetchMessages = (projectId) => (dispatch) => {
  return messageAPIUtil
    .fetchMessages(projectId)
    .then((messages) => dispatch(receiveMessages(messages)));
};

export const fetchMessage = (projectId, messageId) => (dispatch) => {
  return messageAPIUtil
    .fetchMessage(projectId, messageId)
    .then((message) => dispatch(receiveMessage(message)));
};

export const createMessage = (projectId, message) => (dispatch) => {
  return messageAPIUtil.createMessage(projectId, message).then(
    (message) => {
      return dispatch(receiveMessage(message));
    },
    (errors) => {
      return dispatch(receiveMessageErrors(errors.responseJSON));
    }
  );
};

export const updateMessage = (projectId, message) => (dispatch) => {
  return messageAPIUtil.updateMessage(projectId, message).then(
    (message) => {
      return dispatch(receiveMessage(message));
    },
    (errors) => {
      return dispatch(receiveMessageErrors(errors.responseJSON));
    }
  );
};

export const deleteMessage = (messageId) => (dispatch) => {
  return messageAPIUtil
    .deleteMessage(messageId)
    .then(() => dispatch(removeMessage(messageId)));
};
