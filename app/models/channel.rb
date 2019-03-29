class Channel < ApplicationRecord 
  validates :name, presence: true
  
  has_many :memberships,
    as: :location

  belongs_to :server,
    optional: true
  has_many :users,
    through: :memberships,
    source: :user

end