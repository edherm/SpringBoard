export const fetchTodoLists = (projectId) => {
  return $.ajax({
    url: `/api/projects/${projectId}/todo_lists`,
  });
};

export const fetchTodoList = (todoListId) => {
  return $.ajax({
    url: `/api/todo_lists/${todoListId}`,
  });
};

export const createTodoList = (projectId, todo_list) => {
  return $.ajax({
    url: `/api/projects/${projectId}/todo_lists`,
    method: 'POST',
    data: { todo_list },
  });
};

export const updateTodoList = (todo_list) => {
  return $.ajax({
    url: `/api/todo_lists/${todo_list.id}`,
    method: 'PATCH',
    data: { todo_list },
  });
};

export const deleteTodoList = (projectId, todoListId) => {
  return $.ajax({
    url: `/api/projects/${projectId}/todo_lists/${todoListId}`,
    method: 'DELETE',
  });
};
