class Server < ApplicationRecord 
  validates :name, :creator_id, presence: true
  validates :invite_code, presence: true
  

  belongs_to :creator,
    class_name: "User"

  has_many :memberships :as => :location

  has_many :users,
    through: :memberships,
    source: :user

  after_initialize :ensure_invite_url, :ensure_invite_expires


  def ensure_invite_code
    (@invite_code && @invite_expires > Time.now ||= Server.generate_invite_code
  end


  def self.generate_invite_url
    code = SecureRandom.hex.slice(0..7)
    "/invite/" + code
  end

  def ensure_invite_expires
    (@invite_expires && @invite_expires > Time.now) ||= Time.now + 86400
  end


end