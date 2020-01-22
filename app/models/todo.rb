# == Schema Information
#
# Table name: todos
#
#  id           :bigint           not null, primary key
#  description  :string           not null
#  todo_list_id :integer          not null
#  notes        :text
#  complete     :boolean          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

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
    self.complete ||= false;
  end
end
