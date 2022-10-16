import fetchAPI from "./fetch_api";

export const fetchTodoLists = (projectId) => {
  return fetchAPI(`/api/projects/${projectId}/todo_lists`);
};

export const fetchTodoList = (todoListId) => {
  return fetchAPI(`/api/todo_lists/${todoListId}`);
};

export const createTodoList = (projectId, todo_list) => {
  return fetchAPI(`/api/projects/${projectId}/todo_lists`, {
    method: 'POST',
    body: JSON.stringify({ todo_list }),
  });
};

export const updateTodoList = (todo_list) => {
  return fetchAPI(`/api/todo_lists/${todo_list.id}`, {
    method: 'PATCH',
    body: JSON.stringify({ todo_list }),
  });
};

export const deleteTodoList = (todoListId) => {
  return fetchAPI(`/api/todo_lists/${todoListId}`, {
    method: 'DELETE',
  });
};
