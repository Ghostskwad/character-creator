class User < ApplicationRecord
    has_many :characters,  dependent: :destroy
    has_many :templates, through: :characters
    
    # before_save :downcase_username
    
    has_secure_password

    validates :username, presence: true, uniqueness: { case_sensitive: false }

    private

    # def downcase_username
    #   self.username = username.downcase!
    # end

end
