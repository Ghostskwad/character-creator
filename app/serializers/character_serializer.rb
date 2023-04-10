class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :history
  has_one :users
  has_one :templates
end
