import * as todoAPIUtil from '../util/todo_api_util';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const RECEIVE_TODO_ERRORS = 'RECEIVE_TODO_ERRORS';

export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos,
  };
};

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo,
  };
};

export const removeTodo = (todoId) => {
  return {
    type: REMOVE_TODO,
    todoId,
  };
};

export const receiveTodoErrors = (errors) => {
  return {
    type: RECEIVE_TODO_ERRORS,
    errors,
  };
};

export const fetchTodos = (todoListId) => (dispatch) => {
  return todoAPIUtil
    .fetchTodos(todoListId)
    .then((todos) => dispatch(receiveTodos(todos)));
};

export const fetchTodo = (todoId) => (dispatch) => {
  return todoAPIUtil
    .fetchTodo(todoId)
    .then((todo) => dispatch(receiveTodo(todo)));
};

export const createTodo = (todo) => (dispatch) => {
  return todoAPIUtil
    .createTodo(todo)
    .then((todo) => dispatch(receiveTodo(todo)));
};

export const updateTodo = (todo) => (dispatch) => {
  return todoAPIUtil.updateTodo(todo).then((todo) => {
    return dispatch(receiveTodo(todo));
  });
};

export const deleteTodo = (todoId) => (dispatch) => {
  return todoAPIUtil
    .deleteTodo(todoId)
    .then(() => dispatch(removeTodo(todoId)));
};
