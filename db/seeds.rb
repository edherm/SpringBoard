User.destroy_all
Project.destroy_all
TodoList.destroy_all
Todo.destroy_all
Message.destroy_all

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

demo_message1 = Message.create({title: "Let's Organize for Next Season", category: "Pitch", project_id: demo_project1.id, body: "I wanted to organize our thoughts in one space! Let me know what should be on the table for in between seasons."})
demo_message2 = Message.create({title: "In-Person Meetup!", category: "Announcement", project_id: demo_project1.id, body: "We will be meeting next weekemnd. Send me your favorite coffeshop in the area when you see this."})
demo_message3 = Message.create({title: "Sending Out the Email Tomorrow", category: "FYI", project_id: demo_project1.id, body: "Thanks for all of your feedback! The final draft will be sent to old members tomorrow."})
demo_message4 = Message.create({title: "Flyer Followup", category: "Heartbeat", project_id: demo_project1.id, body: "If anyone has any lingering concerns re: the flier, please reach out to let me know!"})
demo_message5 = Message.create({title: "Outstanding tasks?", category: "Question", project_id: demo_project1.id, body: "What should we prioritize before the next season begins?! Let a pal know."})
demo_message6 = Message.create({title: "Let's go to Fahnestock State Park!", category: "Pitch", project_id: demo_project2.id, body: "The title says it all! Just up the hudson, 9 miles from the train station. Let's go!"})
demo_message7 = Message.create({title: "5 going", category: "Announcement", project_id: demo_project2.id, body: "5 of us have signed on! Meal and schedule planning to come."})
demo_message8 = Message.create({title: "Weather", category: "FYI", project_id: demo_project2.id, body: "It will be sunny, but cool at night! Bring those warm sleeping bags and sunscreen."})
demo_message9 = Message.create({title: "Menu", category: "Heartbeat", project_id: demo_project2.id, body: "Let me know what you think of the menu I sent out last night, please!"})
demo_message10 = Message.create({title: "Length of Stay", category: "Question", project_id: demo_project2.id, body: "Should we stay an extra night? I can get off from work and wanted to see what you all thought."})
demo_message11 = Message.create({title: "Train is at 6am", category: "Announcement", project_id: demo_project2.id, body: "See you there!"})