class CharactersController < ApplicationController
    before_action :set_character, only: [:show, :update, :destroy]
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    # GET /characters
    def index
        # Get all characters belonging to the current user
        @characters = @current_user.characters

        # Checks to see if a character exists with the current user
        if @characters.blank? === true
            # If no character exists, return the render_not_found message
            render_not_found_response
        else
        # Render the characters in JSON format with a "ok" status code 200
        render json: @characters, status: :ok
    end
end

def show
    render json: @character, status: :ok 
end

    # POST /characters
    def create
        # Get the name of the character class from the request parameters
        class_name = params[:character_class]

        # Create a new instance of the character class based on the type
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
        
        # Render the new character in JSON format with a "created" status code 201
        render json: @character, status: :created
    end 
    
    # PATCH/PUT /characters/:id
    def update
        @character.character_class.update!(character_class_params)
        render json: @character, status: :accepted
    end

    # DELETE /characters/:id 
    def destroy 
        # Delete the character with the given ID
        @character.destroy!
        
        # Send a "no content" status code 204
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
    
    def character_class_params
        params.require(:stats).permit(:constitution, :strength, :intelligence, :charisma, :wisdom, :dexterity)
      end
    # Error handling callback methods
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: { error: "Character not found" }, status: :not_found
    end
end
