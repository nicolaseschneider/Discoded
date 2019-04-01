class Addtimestampsmemberships < ActiveRecord::Migration[5.2]
  def change
    add_column :memberships, :created_at, :datetime, null: false
    add_column :memberships, :updated_at, :datetime, null: false
  end
end
