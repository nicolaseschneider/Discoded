class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      errors = []
      if params[:user][:password].size == 0
        errors << "Password can't be blank!"
      end
      if params[:user][:username].size == 0
        errors << "Username can't be blank!"
      end
      if params[:user][:username].size != 0 && params[:user][:password].size != 0
        errors << "Invalid username or password"
      end
      render json: errors, status: 401
    else
      login(@user)
      render :show
    end
  end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      render status_code: 404
    end
  end

end
