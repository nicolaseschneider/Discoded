class ApplicationController < ActionController::Base
  protect_from_forgery unless: -> { request.format.json? }
  helper_method :current_user, :logged_in?
  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
  end

  def ensure_logged_in
    render json: ['You must be logged in to do that!'] unless logged_in?
  end
  
end
