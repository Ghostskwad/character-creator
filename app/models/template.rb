class Template < ApplicationRecord
    has_many :characters, dependent: :destroy
    has_many :users, through: :characters
end
