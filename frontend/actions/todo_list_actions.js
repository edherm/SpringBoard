import * as todoListAPIUtil from "../util/todo_list_api_util";

export const RECEIVE_TODO_LISTS = 'RECEIVE_TODO_LISTS';
export const RECEIVE_TODO_LIST = 'RECEIVE_TODO_LIST';
export const REMOVE_TODO_LIST = 'REMOVE_TODO_LIST';
export const RECEIVE_TODO_LIST_ERRORS = 'RECEIVE_TODO_LIST_ERRORS';

export const receiveTodoLists = todoLists => {
  return {
    type: RECEIVE_TODO_LISTS,
    todoLists
  }
}

export const receiveTodoList = todoList => {
  return {
    type: RECEIVE_TODO_LIST,
    todoList
  }
}

export const removeTodoList = todoListId => {
  return {
    type: REMOVE_TODO_LIST,
    todoListId
  }
}

export const receiveTodoListErrors = errors => {
  return {
    type: RECEIVE_TODO_LIST_ERRORS,
    errors
  }
}

export const fetchTodoLists = (projectId) => dispatch => {
  return todoListAPIUtil.fetchTodoLists(projectId)
    .then(todoLists => dispatch(receiveTodoLists(todoLists)))
}

export const fetchTodoList = (projectId, todoListId) => dispatch => {
  return todoListAPIUtil.fetchTodoList(projectId, todoListId)
    .then(todoList => {
      return dispatch(receiveTodoList(todoList))
    }
  )
}

export const createTodoList = (projectId, todoList) => dispatch => {
  return todoListAPIUtil.createTodoList(projectId, todoList)
    .then(todoList => {
      return dispatch(receiveTodoList(todoList));
    }, errors => {
      return dispatch(receiveTodoListErrors(errors.responseJSON));
    }
  )
}

export const updateTodoList = (projectId, todoList) => dispatch => {
  return todoListAPIUtil.updateTodoList(projectId, todoList)
    .then(todoList => {
      return dispatch(receiveTodoList(todoList))
    }, errors => {
      return dispatch(receiveTodoListErrors(errors.responseJSON));
    }
  )
}

export const deleteTodoList = (projectId, todoListId) => dispatch => {
  return todoListAPIUtil.deleteTodoList(projectId, todoListId)
    .then(() => dispatch(removeTodoList(todoListId)))
}