# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_04_14_205310) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "barbarians", force: :cascade do |t|
    t.integer "constitution"
    t.integer "strength"
    t.integer "intelligence"
    t.integer "charisma"
    t.integer "wisdom"
    t.integer "dexterity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "bards", force: :cascade do |t|
    t.integer "constitution"
    t.integer "strength"
    t.integer "intelligence"
    t.integer "charisma"
    t.integer "wisdom"
    t.integer "dexterity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.integer "level"
    t.text "history"
    t.string "character_class_type"
    t.bigint "character_class_id"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_class_type", "character_class_id"], name: "index_characters_on_character_class"
    t.index ["user_id"], name: "index_characters_on_user_id"
  end

  create_table "clerics", force: :cascade do |t|
    t.integer "constitution"
    t.integer "strength"
    t.integer "intelligence"
    t.integer "charisma"
    t.integer "wisdom"
    t.integer "dexterity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "druids", force: :cascade do |t|
    t.integer "constitution"
    t.integer "strength"
    t.integer "intelligence"
    t.integer "charisma"
    t.integer "wisdom"
    t.integer "dexterity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "rogues", force: :cascade do |t|
    t.integer "constitution"
    t.integer "strength"
    t.integer "intelligence"
    t.integer "charisma"
    t.integer "wisdom"
    t.integer "dexterity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "templates", force: :cascade do |t|
    t.integer "level"
    t.string "class_name"
    t.string "race"
    t.string "img_url"
    t.integer "strength"
    t.integer "dexterity"
    t.string "constitution"
    t.string "integer"
    t.integer "intelligence"
    t.integer "wisdom"
    t.integer "charisma"
    t.string "spell1"
    t.string "spell2"
    t.string "ability1"
    t.string "ability2"
    t.string "weapon1"
    t.string "weapon2"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "wizards", force: :cascade do |t|
    t.integer "constitution"
    t.integer "strength"
    t.integer "intelligence"
    t.integer "charisma"
    t.integer "wisdom"
    t.integer "dexterity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "characters", "users"
end
