json.extract! channel , :id, :name
_users = channel.users.map do |user|
  user.id
end
json.users _users

