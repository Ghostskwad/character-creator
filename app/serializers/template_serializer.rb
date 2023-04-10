class TemplateSerializer < ActiveModel::Serializer
  attributes :id, :level, :class_name, :race, :img_url, :strength, :dexterity, :constitution, :integer, :intelligence, :wisdom, :charisma, :spell1, :spell2, :ability1, :ability2, :weapon1, :weapon2
end
