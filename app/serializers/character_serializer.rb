class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :level, :history, :character_class_type
  has_one :character_class, key: :stats

end