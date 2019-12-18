User.destroy_all
Project.destroy_all
TodoList.destroy_all
Todo.destroy_all

demo_user = User.create({email: "demo@email.com", name: "Patsy Hightower", password: "password"})

demo_project1 = Project.create({name: "CSA recruitment", description: "It's time to get our users to signup!", manager_id: demo_user.id})
demo_project2 = Project.create({name: "Hiking trip", description: "Gear lists, meal planning, and schedule!!", manager_id: demo_user.id})

demo_todo_list1 = TodoList.create({name: "Fliers", details: "Straight to the people!", project_id: demo_project1.id})
demo_todo_list2 = TodoList.create({name: "Emails", details: "Get that word out!", project_id: demo_project1.id})
demo_todo_list3 = TodoList.create({name: "Grocery List", project_id: demo_project2.id})
demo_todo_list4 = TodoList.create({name: "Packing List", details: "Food, shelter, and fun!", project_id: demo_project2.id})

demo_todo1 = Todo.create({description: "Write draft", todo_list_id: demo_todo_list1.id, notes: ""})
demo_todo2 = Todo.create({description: "Review draft", todo_list_id: demo_todo_list1.id, notes: ""})
demo_todo3 = Todo.create({description: "Send draft for feedback", todo_list_id: demo_todo_list1.id, notes: ""})
demo_todo4 = Todo.create({description: "Print", todo_list_id: demo_todo_list1.id, notes: ""})
demo_todo5 = Todo.create({description: "Write", todo_list_id: demo_todo_list2.id, notes: ""})
demo_todo6 = Todo.create({description: "Email without checking for spelling and grammar errors", todo_list_id: demo_todo_list2.id, notes: ""})
demo_todo7 = Todo.create({description: "Food", todo_list_id: demo_todo_list3.id, notes: ""})
demo_todo8 = Todo.create({description: "Drink", todo_list_id: demo_todo_list3.id, notes: ""})
demo_todo9 = Todo.create({description: "stove", todo_list_id: demo_todo_list4.id, notes: ""})
demo_todo10 = Todo.create({description: "tent", todo_list_id: demo_todo_list4.id, notes: ""})
demo_todo11 = Todo.create({description: "sleeping bag", todo_list_id: demo_todo_list4.id, notes: ""})
demo_todo12 = Todo.create({description: "cards", todo_list_id: demo_todo_list4.id, notes: ""})