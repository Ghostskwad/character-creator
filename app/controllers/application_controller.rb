class ApplicationController < ActionController::API
    # Includes the ActionController::Cookies module in the controller, which allows cookies to be accessed and set in the response
    include ActionController::Cookies
  
    # Sets up a before_action filter to call the authorize method before every action in the controller
    before_action :authorize
  
    private
    
    # Finds the current user based on the session user_id, sets the @current_user instance variable, and renders an error response with a 401 unauthorized status if the user is not found
    def authorize
      @current_user ||= User.find_by(id: session[:user_id])
      render json: {errors: "Must Login First"}, status: :unauthorized unless @current_user
    end
  end