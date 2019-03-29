class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.string :name, null: false
      t.string :image
      t.integer :creator_id, null: false
      t.timestamps
    end
    add_index :servers, :name

    create_table :memberships do |t|
      t.integer :user_id, null: false
      t.integer :location_id, null: false
    end
    add_index :memberships, [:user_id, :location_id], unique: true
  end
end
