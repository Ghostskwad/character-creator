class Character < ApplicationRecord
  belongs_to :user
  belongs_to :character_class, polymorphic: true
end
