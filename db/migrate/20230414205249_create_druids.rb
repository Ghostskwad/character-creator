class CreateDruids < ActiveRecord::Migration[7.0]
  def change
    create_table :druids do |t|
      t.integer :constitution
      t.integer :strength
      t.integer :intelligence
      t.integer :charisma
      t.integer :wisdom
      t.integer :dexterity

      t.timestamps
    end
  end
end
