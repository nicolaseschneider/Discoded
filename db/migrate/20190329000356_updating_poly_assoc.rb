class UpdatingPolyAssoc < ActiveRecord::Migration[5.2]
  def change
    remove_index :memberships, name: :index_memberships_on_user_id_and_location_id
    add_index :memberships, [:user_id, :location_id, :location_type], unique: true

  end
end
