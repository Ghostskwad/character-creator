class User < ApplicationRecord
    has_many :characters,  dependent: :destroy
    has_many :templates, through: :characters
end
