class AddEmailColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :email, :string, null: false
  end
end
