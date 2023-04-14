class User < ApplicationRecord
  has_many :characters,  dependent: :destroy
  has_many :bards, through: :characters, source: :character_class, source_type: 'Bard'
  has_many :barbarians, through: :characters, source: :character_class, source_type: 'Barbarian'
  has_many :clerics, through: :characters, source: :character_class, source_type: 'Cleric'
  has_many :druids, through: :characters, source: :character_class, source_type: 'Druid'
  has_many :rogues, through: :characters, source: :character_class, source_type: 'Rogue'
  has_many :wizards, through: :characters, source: :character_class, source_type: 'Wizard'
    before_save :downcase_username
    
    has_secure_password

    validates :username, presence: true, uniqueness: { case_sensitive: false }

    # def self.find_by_case_insensitive_username(username)
    #   where('LOWER(username) = ?', username.downcase).first
    # end

    private

    def downcase_username
      self.username = username.downcase
    end
end
