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
quoteimages = (['image1.png', 'image2.png', 'image3.png'])
question1 =(['answer1', 'answer2', 'answer3'])
question2 =(['answer1', 'answer2', 'answer3'])
question3 =(['answer1', 'answer2', 'answer3'])
question4 =(['answer1', 'answer2', 'answer3'])
question5 =(['answer1', 'answer2', 'answer3'])
question6 =(['answer1', 'answer2', 'answer3'])
question7 =(['answer1', 'answer2', 'answer3'])
question8 =(['answer1', 'answer2', 'answer3'])
question9 =(['answer1', 'answer2', 'answer3'])
question10 =(['answer1', 'answer2', 'answer3'])
question11 =(['answer1', 'answer2', 'answer3'])
question12 =(['answer1', 'answer2', 'answer3'])
question13 =(['answer1', 'answer2', 'answer3'])
question14 =(['answer1', 'answer2', 'answer3'])
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



Quote.create(
	name: 'John', 
	email: emails.first,
	address: addresses.first, 
	city: cities.first, 
	state: states.first, 
	region: regions.first,
	question1: question1.first,
	question2: question2.first,
	question3: question3.first,
	question4: question4.first,
	question5: question5.first,
	question6: question6.first,
	question7: question7.first,
	question8: question8.first,
	question9: question9.first,
	question10: question10.first,
	question11: question11.first,
	question12: question12.first,
	question13: question13.first,
	question14: question14.first,
	image: open('app/assets/images/image1.png'),
	read: 'false'
)
Quote.create(
	name: 'Jane',
	email: emails.second,
	address: addresses.second,
	city: cities.second, 
	state: states.second, 
	region: regions.first,
	question1: question1.second,
	question2: question2.second,
	question3: question3.second,
	question4: question4.second,
	question5: question5.second,
	question6: question6.second,
	question7: question7.second,
	question8: question8.second,
	question9: question9.second,
	question10: question10.second,
	question11: question11.second,
	question12: question12.second,
	question13: question13.second,
	question14: question14.second,
	image: open('app/assets/images/image2.png'),
	read: 'false'
)
Quote.create(
	name: 'Mark',
	email: emails.third,
	address: addresses.third, 
	city: cities.third, 
	state: states.third, 
	region: regions.first,
	question1: question1.third,
	question2: question2.third,
	question3: question3.third,
	question4: question4.third,
	question5: question5.third,
	question6: question6.third,
	question7: question7.third,
	question8: question8.third,
	question9: question9.third,
	question10: question10.third,
	question11: question11.third,
	question12: question12.third,
	question13: question13.third,
	question14: question14.third,
	image: open('app/assets/images/image3.png'),
	read: 'false'
)






























