class User < ApplicationRecord
    attr_reader :password
    validates :username, :email, presence: true, uniqueness: true
    validates :password_digest, :session_token, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true

    after_initialize :ensure_session_token

    has_many :own_servers,
        foreign_key: :creator_id,
        class_name: "Server"

    has_many :memberships

    has_many :servers,
        through: :memberships,
        source_type: "Server",
        source: :location

    has_many :channels,
        through: :memberships,
        source_type: "Channel",
        source: :location
        
    has_many :messages
        
    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user && user.is_password?(password) ? user :nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end
    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end
end