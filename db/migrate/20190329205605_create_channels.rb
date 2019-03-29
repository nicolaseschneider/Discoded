class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.integer :server_id
      t.string :name, null: false
      t.timestamps


    end
    create_table "channel_subscriptions", force: :cascade do |t|
      t.integer "chat_channel_id", null: false
      t.integer "user_id", null: false
      t.boolean "is_direct_message", default: false, null: false
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
    end
  end
end
