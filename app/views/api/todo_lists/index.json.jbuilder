@todo_lists.each do |todo_list|
  json.set! todo_list.id do
    json.partial! "todo_list", todo_list: todo_list
  end
end