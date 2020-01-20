export const fetchTodos = (project_id, todo_list_id) => {
  return $.ajax({
    url: `/api/projects/${project_id}/todo_lists/${todo_list_id}/todos`
  })
}

export const fetchTodo = (project_id, todo_list_id, todo_id) => {
  return $.ajax({
    url: `/api/projects/${project_id}/todo_lists/${todo_list_id}/todos/${todo_id}`
  })
}

export const createTodo = (projectId, todo_list_id, todo) => {
  return $.ajax({
    url: `/api/projects/${projectId}/todo_lists/${todo_list_id}/todos`,
    method: "POST",
    data: { todo }
  })
}

export const updateTodo = (projectId, todo_list_id, todo) => {
  debugger
  return $.ajax({
    url: `/api/projects/${projectId}/todo_lists/${todo_list_id}/todos/${todo.id}`,
    method: "PATCH",
    data: { todo }
  })
}

export const deleteTodo = (projectId, todo_list_id, todoId) => {
  return $.ajax({
    url: `/api/projects/${projectId}/todo_lists/${todo_list_id}/todos/${todoId}`,
    method: "DELETE"
  })
}