    # t.string "description", null: false
    # t.integer "todo_list_id", null: false
    # t.text "notes"
    # t.boolean "complete", null: false
    # t.datetime "created_at", null: false
    # t.datetime "updated_at", null: false
    # t.index ["todo_list_id"], name: "index_todos_on_todo_list_id"

class Todo < ApplicationRecord
  validates :description, :todo_list_id, presence: true
  validates :complete, inclusion: {in: [ true, false ] }

  after_initialize :ensure_complete

  belongs_to :todo_list
  
  def ensure_complete
    debugger
    self.complete ||= false;
  end
end
