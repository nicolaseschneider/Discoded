# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Channel.destroy_all
Server.destroy_all
Membership.destroy_all
User.destroy_all
Message.destroy_all


nicolas = User.create!({username: 'Karateman', password: 'Glubgluby', email: 'nicolas.e.schneider@vanderbilt.edu'})
marcus = User.create!({username: 'ILoveSmashUltimate', password: 'YoshiMain', email: 'mark@markymark.mark'})
wellington = User.create!({username: ';Drop Table Users', password: 'TekashiIsMyIdol', email: 'ImABigDeal@baller.bank'})
mike = User.create!({username: 'Mike', password: 'yeahboi', email: 'ImABigDeallll@baller.bank'})

server1 = Server.create!({ name: 'Welcome to Discoded!', creator: nicolas})

server2 = Server.create!({ name: ';Drop Table Users', creator: wellington})
server3 = Server.create!({ name: 'mikes-place', creator: mike})
     

Membership.create!({user: nicolas, location: server1, location_type: "Server"})
Membership.create!({user: wellington, location: server1,location_type: "Server"})
Membership.create!({user: marcus, location: server1,location_type: "Server"})
Membership.create!({user: mike, location: server1, location_type: "Server"})

Membership.create!({user: mike, location: server2, location_type: "Server"})
Membership.create!({user: marcus, location: server2,location_type: "Server"})
Membership.create!({user: wellington, location: server2,location_type: "Server"})

channel1 = Channel.create!({name: "Just Chillin,", server: server1})
channel2 = Channel.create!({name: "Release party!", server: server1})
server_new = Server.create!({name: 'test', creator: mike })

DM = Channel.create!({name: "DM"})
DM.users << mike
DM.users << nicolas