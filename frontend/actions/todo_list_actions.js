import * as todoListAPIUtil from "../util/todo_list_api_util";

export const RECEIVE_TODO_LISTS = 'RECEIVE_TODO_LISTS';
export const RECEIVE_TODO_LIST = 'RECEIVE_TODO_LIST';
export const REMOVE_TODO_LIST = 'REMOVE_TODO_LIST';
export const RECEIVE_TODO_ERRORS = 'RECEIVE_TODO_ERRORS';

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

export const receiveTodoErrors = errors => {
  return {
    type: RECEIVE_TODO_ERRORS,
    errors
  }
}

export const fetchTodoLists = (projectId) => dispatch => {
  return todoListAPIUtil.fetchTodoLists(projectId)
    .then(todoLists => dispatch(receiveTodoLists(todoLists)))
}

export const fetchTodoList = (projectId, TodoListId) => dispatch => {
  return todoListAPIUtil.fetchTodoList(projectId, TodoListId)
    .then(todoList => dispatch(receiveTodoList(todoList)))
}

export const createTodoList = (projectId, todoList) => dispatch => {
  return todoListAPIUtil.createTodoList(projectId, todoList)
    .then(todoList => dispatch(receiveTodoList(todoList)))
}

export const updateTodoList = (projectId, todoList) => dispatch => {
  return todoListAPIUtil.updateTodoList(projectId, todoList)
    .then(todoList => dispatch(receiveTodoList(todoList)))
}

export const deleteTodoList = (projectId, todoListId) => dispatch => {
  return todoListAPIUtil.deleteTodoList(projectId, todoListId)
    .then(() => dispatch(removeTodoList(todoListId)))
}