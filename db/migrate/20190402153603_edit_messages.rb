class EditMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :channel_id, :integer, null: false
    add_column :messages, :author_id, :integer, null: false
  end
end
