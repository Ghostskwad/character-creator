class CharactersController < ApplicationController
    before_action :set_character, only: [:destroy]

    def index
        @character = @current_user.characters
        render json: @character
    end

    def create
        @character = Character.new(character_params)
        @character.save!
        render json: @character, status: :created
      end    

    def destroy
        @character.destroy!
        head :no_content
      end



private

    def set_character
        @character = Character.find(params[:id])
    end

    def character_params
        params.permit(:name, :history)
    end
end
