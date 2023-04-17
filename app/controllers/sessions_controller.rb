class SessionsController < ApplicationController
    # Skips the authorize action for the create action only
    skip_before_action :authorize, only: :create
  
    # Authenticates the user by finding their record in the database with their username and password, sets the session for the user to the user id, and renders the user as JSON
    def create
      user = User.find_by(username: params[:username].downcase)
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user
      else
        # Renders an error response with a 401 unauthorized status if the user cannot be authenticated
        render json: { error: ["Invalid password or username"]}, status: :unauthorized
      end
    end
  
    # Deletes the session for the current user and renders a 204 no content status
    def destroy
      session.delete :user_id
      head :no_content
    end
  end