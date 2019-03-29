class ServersController < ApplicationController


  def show
    @server = Server.find_by(invite_code: params[:id])
    if logged_in? && @server
      Membership.create({user: current_user, location: @server})
      redirect_to root_url
    elsif !logged_in?
      redirect_to root_url+"/#/login"
    else
      render json: ['Invalid server code'], status: 404
    end
  end

  
end