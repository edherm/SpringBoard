# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Project.destroy_all

demo_user = User.create({email: "demo@email.com", name: "Patsy Hightower", password: "password"})

demo_project1 = Project.create({name: "CSA recruitment", description: "It's time to get our users to signup!", manager_id: demo_user.id})
demo_project2 = Project.create({name: "Hiking trip", description: "Gear lists, meal planning, and schedule!!", manager_id: demo_user.id})