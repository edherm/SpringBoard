@todos.each do |todo|
  json.set! todo.id do
    json.partial! "todo", todo: todo
  end
end