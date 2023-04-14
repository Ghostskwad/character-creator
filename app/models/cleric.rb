class Cleric < ApplicationRecord
    has_many :characters, as: :character_class
    has_many :users, through: :characters
end



