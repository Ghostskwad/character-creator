class BardSerializer < ActiveModel::Serializer
  attributes :constitution, :strength, :intelligence, :charisma, :wisdom, :dexterity
end
