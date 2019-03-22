class Editusers1 < ActiveRecord::Migration[5.2]
  def change
    drop_table :users
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false   
      t.string :profile_image_url
      t.timestamps  
      
    end
    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true
  end
end
