class Membership < ApplicationRecord
  validates :user_id, uniqueness: {
    scope: :location,  message: "User can only join a channel/server once"
  }

  belongs_to :user

  belongs_to :location, 
    polymorphic: true

end