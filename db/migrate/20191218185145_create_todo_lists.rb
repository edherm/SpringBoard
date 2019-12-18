class CreateTodoLists < ActiveRecord::Migration[5.2]
  def change
    create_table :todo_lists do |t|
      t.string :name, null: false
      t.text :details
      t.integer :project_id, null: false

      t.timestamps
    end
    add_index :todo_lists, :project_id
  end
end
