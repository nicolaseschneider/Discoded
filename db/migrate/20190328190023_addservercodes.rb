class Addservercodes < ActiveRecord::Migration[5.2]
  def change
    add_column :servers, :invite_expires, :datetime
    add_column :servers, :invite_code, :string
  end
end
