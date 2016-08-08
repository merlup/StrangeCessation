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
q1 =(['answer1', 'answer2', 'answer3'])
q2 =(['answer1', 'answer2', 'answer3'])
q3 =(['answer1', 'answer2', 'answer3'])
q4 =(['answer1', 'answer2', 'answer3'])
q5 =(['answer1', 'answer2', 'answer3'])
q6 =(['answer1', 'answer2', 'answer3'])
q7 =(['answer1', 'answer2', 'answer3'])
q8 =(['answer1', 'answer2', 'answer3'])
q9 =(['answer1', 'answer2', 'answer3'])
q10 =(['answer1', 'answer2', 'answer3'])
q11 =(['answer1', 'answer2', 'answer3'])
q12 =(['answer1', 'answer2', 'answer3'])
q13 =(['answer1', 'answer2', 'answer3'])
q14 =(['answer1', 'answer2', 'answer3'])
usernames = (['administrator', 'guest'])
useremails = (['admin@email.com', 'guest@email.com'])
userpasswords = (['secret'])
useravatar = (['admin.png', 'guest.png'])


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



Request.create(
	name: 'John', 
	email: emails.first,
	address: addresses.first, 
	city: cities.first, 
	state: states.first, 
	region: regions.first,
	#q1: q1.first,
	#q2: q2.first,
	#q3: q3.first,
	#q4: q4.first,
	#q5: q5.first,
	#q6: q6.first,
	#q7: q7.first,
	#q8: q8.first,
	#q9: q9.first,
	#q10: q10.first,
	#q11: q11.first,
	#q12: q12.first,
	#q13: q13.first,
	#q14: q14.first,
	image: open('app/assets/images/image1.png'),
	read: 'false'
)
Request.create(
	name: 'Jane',
	email: emails.second,
	address: addresses.second,
	city: cities.second, 
	state: states.second, 
	region: regions.first,
	#q1: q1.first,
	#q2: q2.first,
	#q3: q3.first,
	#q4: q4.first,
	#q5: q5.first,
	#q6: q6.first,
	#q7: q7.first,
	#q8: q8.first,
	#q9: q9.first,
	#q10: q10.first,
	#q11: q11.first,
	#q12: q12.first,
	#q13: q13.first,
	#q14: q14.first,
	image: open('app/assets/images/image2.png'),
	read: 'false'
)
Request.create(
	name: 'Mark',
	email: emails.third,
	address: addresses.third, 
	city: cities.third, 
	state: states.third, 
	region: regions.first,
	#q1: q1.first,
	#q2: q2.first,
	#q3: q3.first,
	#q4: q4.first,
	#q5: q5.first,
	#q6: q6.first,
	#q7: q7.first,
	#q8: q8.first,
	#q9: q9.first,
	#q10: q10.first,
	#q11: q11.first,
	#q12: q12.first,
	#q13: q13.first,
	#q14: q14.first,
	image: open('app/assets/images/image3.png'),
	read: 'false'
)






























