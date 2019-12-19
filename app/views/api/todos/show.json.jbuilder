json.todo do
  json.id @todo.id
  json.description @todo.description
  json.notes @todo.notes
  json.todo_list_id @todo.todo_list_id
end