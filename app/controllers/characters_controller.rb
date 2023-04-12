class CharactersController < ApplicationController
    before_action :set_character

    def index
        @character = User.find
    end

    def show

    end



private

    def set_character
        @character = Character.find(params[:id])
    end

    def character_params
        params.permit(:name, :history)
    end
end
