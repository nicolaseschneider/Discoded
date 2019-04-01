class Channel < ApplicationRecord 
  validates :name, presence: true
  
  has_many :memberships,
    as: :location

  belongs_to :server,
    optional: true

  has_many :users,
    through: :memberships,
    source: :user

  after_initialize :ensure_members

  def ensure_members
    if self.server
      self.server.users.each do |user| 

        unless self.users.include?(user)
          self.users << user
        end
      
      end
    end
  end

end