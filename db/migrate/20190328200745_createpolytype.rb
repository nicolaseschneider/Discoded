class Createpolytype < ActiveRecord::Migration[5.2]
  def change
    add_column :memberships, :location_type, :string
  end
end
