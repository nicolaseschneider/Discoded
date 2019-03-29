class Membership < ApplicationRecord
  validates: :user_id, :location_id, presence: true

  validates: :user_id, uniqueness: {
    scope: :question_id, message: "User can only join a channel/server once"
  }

  belongs_to :user
  belongs_to :location, :polymorphic => true

end