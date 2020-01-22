class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :title, null: false
      t.string :category
      t.integer :project_id, null: false
      t.text :body, null: false

      t.timestamps
    end
    add_index :messages, :project_id
  end
end
