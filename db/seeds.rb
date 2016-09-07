# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

cities = (['San Francisco','Los Angeles','New York','Milwaukee'])
states = (['California','New York', 'Wisconsin'])
regions =(['USA','Other'])
addresses = (['1234 4th st', '1234 5th st','2352 6th st', '56743 9th st'])
emails = (['email1@email.com', 'email2@email.com','email3@email.com','email4@email.com'])
requestimages = (['image1.png', 'image2.png', 'image3.png'])
usernames = (['administrator', 'guest'])
useremails = (['admin@email.com', 'guest@email.com'])
userpasswords = (['secret'])
useravatar = (['admin.png', 'guest.png'])
questions = (['Sup Bruh , How you been?' , "WOuld you Hit?"])
answers = (['Great', "I would definantly"])


User.create(
	username: usernames.first,
	email: useremails.first,
	password: userpasswords.first,
	avatar: open('app/assets/images/admin.png')
)

User.create(
	username: usernames.second,
	email: useremails.second,
	password: userpasswords.first,
	avatar: open('app/assets/images/guest.png')
)

Question.create(
	content: questions.first,
	image: open('app/assets/images/image1.png')
)

Question.create(
	content: questions.second,
	image: open('app/assets/images/image1.png')
)


Request.create(
	name: 'John', 
	email: emails.first,
	address: addresses.first, 
	city: cities.first, 
	state: states.first, 
	region: regions.first,
	image: open('app/assets/images/image1.png'),
	read: 'false',

)
Request.create(
	name: 'Jane',
	email: emails.second,
	address: addresses.second,
	city: cities.second, 
	state: states.second, 
	region: regions.first,
	image: open('app/assets/images/image2.png'),
	read: 'false',
	
)
Request.create(
	name: 'Mark',
	email: emails.third,
	address: addresses.third, 
	city: cities.third, 
	state: states.third, 
	region: regions.first,
	image: open('app/assets/images/image3.png'),
	read: 'false',

)






























