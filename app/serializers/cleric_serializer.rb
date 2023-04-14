class ClericSerializer < ActiveModel::Serializer
  attributes :id, :class_name, :constitution, :strength, :intelligence, :charisma, :wisdom, :dexterity
end
