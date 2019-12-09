class AddUserColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :session_token, :string, null: false
  end
end
