class CreateTemplates < ActiveRecord::Migration[7.0]
  def change
    create_table :templates do |t|
      t.integer :level
      t.string :class_name
      t.string :race
      t.string :img_url
      t.integer :strength
      t.integer :dexterity
      t.string :constitution
      t.string :integer
      t.integer :intelligence
      t.integer :wisdom
      t.integer :charisma
      t.string :spell1
      t.string :spell2
      t.string :ability1
      t.string :ability2
      t.string :weapon1
      t.string :weapon2

      t.timestamps
    end
  end
end
