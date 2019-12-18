class CreateTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.string :description, null: false
      t.integer :todo_list_id, null: false
      t.text :notes
      t.boolean :complete, null: false

      t.timestamps
    end
    add_index :todos, :todo_list_id
  end
end
