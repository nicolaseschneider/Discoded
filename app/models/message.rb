class Message < ApplicationRecord
  validates :body, :channel_id, :author_id, presence: true
  belongs_to :channel

  belongs_to :author,
    class_name: :User
end
