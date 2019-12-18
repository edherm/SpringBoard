#     t.string "name", null: false
#     t.text "details"
#     t.integer "project_id", null: false
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#     t.index ["project_id"], name: "index_todo_lists_on_project_id"

class TodoList < ApplicationRecord
  validates :name, :project_id, presence: true

  belongs_to :project

  has_many :todos
end
