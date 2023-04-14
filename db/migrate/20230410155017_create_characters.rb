class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.integer :level
      t.text :history
      t.references :character_class, polymorphic: true
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
