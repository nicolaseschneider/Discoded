json.extract! server,  :id, :name, :image, :image, :invite_code
_users = server.users.map do |user|
  user.id
end
json.users _users

