# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
nicolas = User.create!({username: 'Karateman', password: 'Glubgluby', email: 'nicolas.e.schneider@vanderbilt.edu'})
marcus = User.create!({username: 'ILoveSmashUltimate', password: 'YoshiMain', email: 'mark@markymark.mark'})
wellington = User.create!({username: 'MyNetflixSux', password: 'TekashiIsMyIdol', email: 'ImABigDeal@baller.bank'}))

Server.create!({name: 'general Chat', creator_id: 1})
Server.create!({name: 'lets bad talk nick', creator_id: 3})

Membership.create!({user_id: 1, location_id:1})
Membership.create!({user_id: 3, location_id:1})
Membership.create!({user_id: 2, location_id:1})


Membership.create!({user_id: 2, location_id:2})
Membership.create!({user_id: 3, location_id:2})
