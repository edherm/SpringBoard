import fetchAPI from "./fetch_api";

export const fetchTodos = (todo_list_id) => {
  return fetchAPI(`/api/todo_lists/${todo_list_id}/todos`);
};

export const fetchTodo = (todo_id) => {
  return fetchAPI(`/api/todos/${todo_id}`);
};

export const createTodo = (todo) => {
  return fetchAPI(`/api/todos`, {
    method: 'POST',
    body: JSON.stringify({ todo }),
  });
};

export const updateTodo = (todo) => {
  return fetchAPI(`/api/todos/${todo.id}`, {
    method: 'PATCH',
    body: JSON.stringify({ todo }),
  });
};

export const deleteTodo = (todoId) => {
  return fetchAPI(`/api/todos/${todoId}`, {
    method: 'DELETE',
  });
};
