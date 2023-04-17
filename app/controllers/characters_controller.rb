class CharactersController < ApplicationController
    before_action :set_character, only: [:destroy]
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    # GET /characters
    def index
        # Get all characters belonging to the current user
        @character = @current_user.characters
        # Render the characters in JSON format
        render json: @character
    end

    # POST /characters
    def create
        # Get the name of the character class from the request parameters
        class_name = params[:character_class]

        # Create a new instance of the character class based on the name
        character_class = case class_name
        when "Barbarian"
            Barbarian.create
        when "Bard"
            Bard.create
        when "Cleric"
            Cleric.create
        when "Druid"
            Druid.create
        when "Rogue"
            Rogue.create
        when "Wizard"
            Wizard.create
        end

        # Create a new character with the given parameters and set additional attributes
        @character = Character.new(
            character_params.merge(
            level: 10, 
            character_class_type: params[:character_class], 
            character_class_id: character_class.id,
            user_id: @current_user.id
            ))
        
        # Save the new character to the database
        @character.save!
        
        # Render the new character in JSON format with a "created" status code
        render json: @character, status: :created
    end    

    # DELETE /characters/:id
    def destroy
        # Delete the character with the given ID
        @character.destroy!
        
        # Send a "no content" status code
        head :no_content
    end

    private

    # Set the @character instance variable based on the ID in the request parameters
    def set_character
        @character = Character.find(params[:id])
    end

    # Get the permitted parameters from the request parameters
    def character_params
        params.permit(:name, :history)
    end

    # Error handling callback methods
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
      end
  
      def render_not_found_response
        render json: { error: "Character not found" }, status: :not_found
      end
end
