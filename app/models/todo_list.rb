# == Schema Information
#
# Table name: todo_lists
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  details    :text
#  project_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

#     t.string "name", null: false
#     t.text "details"
#     t.integer "project_id", null: false
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#     t.index ["project_id"], name: "index_todo_lists_on_project_id"

class TodoList < ApplicationRecord
  validates :name, :project_id, presence: true

  belongs_to :project

  has_many :todos, dependent: :destroy
end
