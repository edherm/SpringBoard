export const fetchTodos = (todo_list_id) => {
  return $.ajax({
    url: `/api/todo_lists/${todo_list_id}/todos`,
  });
};

export const fetchTodo = (todo_id) => {
  return $.ajax({
    url: `/api/todos/${todo_id}`,
  });
};

export const createTodo = (projectId, todo_list_id, todo) => {
  return $.ajax({
    url: `/api/projects/${projectId}/todo_lists/${todo_list_id}/todos`,
    method: 'POST',
    data: { todo },
  });
};

export const updateTodo = (projectId, todo_list_id, todo) => {
  return $.ajax({
    url: `/api/projects/${projectId}/todo_lists/${todo_list_id}/todos/${todo.id}`,
    method: 'PATCH',
    data: { todo },
  });
};

export const deleteTodo = (todoId) => {
  return $.ajax({
    url: `/api/todos/${todoId}`,
    method: 'DELETE',
  });
};
