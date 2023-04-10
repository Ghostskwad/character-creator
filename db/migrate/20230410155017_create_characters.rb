class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.text :history
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :template, null: false, foreign_key: true

      t.timestamps
    end
  end
end
