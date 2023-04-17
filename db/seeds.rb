puts "🗑️  Clearing cache of seeds... "
User.destroy_all
Barbarian.destroy_all
Bard.destroy_all
Cleric.destroy_all
Druid.destroy_all
Rogue.destroy_all
Wizard.destroy_all
Character.destroy_all

puts "🌱 Seeding Users..."
u1 = User.create(username: "Sheena", password: "1234")
u2 = User.create(username: "Quade", password: "1234")
u3 = User.create(username: "Quinn", password: "1234")

puts "🧙‍♂️ Seeding Classes..."
c1 = Barbarian.create
c2 = Bard.create
c3 = Cleric.create
c4 = Druid.create
c5 = Rogue.create
c6 = Wizard.create

puts "🧝 Seeding Characters..."
Character.create(name: "Lucifer", level: 10, history: "Fell from grace, and now seeks revenge on his father who threw him out from heaven.", character_class_type: "Barbarian", character_class_id: c1.id, user_id: u1.id)
Character.create(name: "Oob", level: 10, history: "Can only grant wishes. Who knows what kind of wishes... ", character_class_type: "Wizard", character_class_id: c6.id, user_id: u3.id)
Character.create(name: "Pike Trickfoot", level: 10, history: "Has trouble talking to her god, but tries really hard. Has a barbarian friend.", character_class_type: "Cleric", character_class_id: c3.id, user_id: u2.id)
Character.create(name: "Bob", level: 10, history: "His name is Bob.", character_class_type: "Bard", character_class_id: c2.id, user_id: u1.id)

puts "✅ Done seeding!🪴"

