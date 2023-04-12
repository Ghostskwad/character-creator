class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :history
  has_one :user
  has_one :template
end
