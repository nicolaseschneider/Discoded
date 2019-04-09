class ServersController < ApplicationController


  def show
    @server = Server.find_by(invite_code: params[:id])
    if logged_in? && @server
      Membership.create({user: current_user, location: @server})
      render :show
    elsif !logged_in?
      redirect_to "https://discoded.herokuapp.com"
    else
      render json: ['Invalid server code'], status: 404
    end
  end

  def join
    @server = Server.find_by(invite_code: params[:id])
    if logged_in? && @server
      Membership.create({user: current_user, location: @server})
      redirect_to "https://discoded.herokuapp.com/#{current_user.id}/#{@server.id}"
    elsif !logged_in?
      redirect_to "https://discoded.herokuapp.com"
    else
      render json: ['Invalid server code'], status: 404
    end
  end
  
end