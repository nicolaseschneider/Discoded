class Api::ChannelsController < ApplicationController

    def index
        unless params[:id] == "DM"
            server = Server.includes(:channels).find(params[:id])
            @channels = server.channels
            render :index
        else
            @channels = []
            Channel.where(server_id: nil).find_each do |dm|
              @channels << dm if dm.users.include?(current_user)
            end 
            @channels
            render :index
        end

    end


    def show
        @channel = Channel.find(params[:id])

        render :show
    end

    
  def create

    
    if params[:server_id]
        @channel = Channel.new(channel_params)
        server = Server.find(params[:server_id])
        @channel.server = server
    elsif params[:user_id]
      channels = Channel.find_by_sql("
        SELECT * 
        FROM channels 
        JOIN memberships on channels.id = memberships.location_id 
        WHERE ( memberships.user_id = #{params[:user_id]} AND memberships.location_type = 'Channel' AND channels.server_id is NULL) 
        OR (memberships.user_id = #{params[:curruser_id]} AND memberships.location_type = 'Channel' AND channels.server_id is NULL)")
      if channels.length > 0
        @channel = Channel.find(channels[0].location_id) 
        render :show
      else
        user1 = User.find(params[:user_id])
        user2 = User.find(params[:user_id])
        @channel = Channel.new(name: "@" + user1.username + " & " + "@" + user2.username)
        @channel.users << user1
        @channel.users << user2

      end
    end

    if @channel.server and @channel.save
        render :show
    elsif @channel.save
      @channel.users << current_user
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def channel_params
    params.require(:channel).permit(:name, :server_id)
  end
end