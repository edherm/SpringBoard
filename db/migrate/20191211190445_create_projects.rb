class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :name, null:false
      t.text :description
      t.integer :manager_id, null:false

      t.timestamps
    end
    add_index :projects, :manager_id
  end
end
