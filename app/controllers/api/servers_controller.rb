class Api::ServersController < ApplicationController

  def index
    @servers = Server.all;
    # @servers = current_user.servers
    render :index
  end
  
  def show
    @server = Server.find(params[:id])
    render :show
  end

  def create
    @server = Server.new(server_params)
    @server.creator_id = current_user.id
    if @server.save
      @server.users << current_user
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def update
    @server = Server.find(params[:id])
    if @server.update(server_params)
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def destroy
    @server = Server.find(params[:id])
    if @server && @sever.creator == current_user
      @server.destroy
      render json: {}
    else
      render json: ['Quit it!'], status: 404
    end
  end

  private
  def server_params
    params.require(:server).permit(:name, :image)
  end

end