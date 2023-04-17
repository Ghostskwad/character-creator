class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :history, :character_class_type
  has_one :character_class, key: :stats

end