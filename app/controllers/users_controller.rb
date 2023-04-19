class UsersController < ApplicationController
    # Sets up a rescue block to handle ActiveRecord::RecordInvalid exceptions and calls the render_invalid method to render an error response
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
    skip_before_action :authorize, only: [:create]
  
    # Shows the current user logged in, which is set up by a before_action filter
    def show
      render json: @current_user, status: :ok
    end
  
    # Creates a new user with the parameters passed into the request, saves the user to the database, and sets the session for the user to the new user id
    def create
      user = User.new(user_params)
      user.save!
      session[:user_id] = user.id
      render json: user, status: :created
    end
  
    private
    
    # Permits the username and password parameters to be used for user creation
    def user_params
      params.permit(:username, :password)
    end
  
    # Renders an error response with the full error messages if ActiveRecord::RecordInvalid exception is raised
    def render_invalid(invalid)
      render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
  end