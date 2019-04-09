class Api::ChannelsController < ApplicationController

    def index
        unless params[:id] == "DM"
            server = Server.includes(:channels).find(params[:id])
            @channels = server.channels.includes(:users)
            render :index
        else
            @channels = []
            Channel.includes(:users).where(server_id: nil).find_each do |dm|
              @channels << dm if dm.users.include?(current_user)
            end 
            @channels
            render :index
        end

    end


    def show
      @channel = Channel.includes(:users).find(params[:id])
      render :show
    end

    
  def create

    if params[:channel][:server_id]

      @channel = Channel.new(channel_params)
      server = Server.includes(:channels).find(params[:channel][:server_id])
      @channel.server = server

    elsif params[:channel][:user_id]
    
      channels = Channel.find_by_sql("
        SELECT * 
        FROM channels 
        JOIN memberships AS member1 on channels.id = member1.location_id 
        JOIN memberships AS member2 on channels.id = member2.location_id
        WHERE ( 
          member1.user_id = #{params[:channel][:curruser_id]} 
          AND member1.location_type = 'Channel'
          AND member2.user_id = #{params[:channel][:user_id]} 
          AND channels.server_id is NULL
        ) 
      ")

      if channels.length > 0

        user2 = User.find(params[:channel][:curruser_id])
        @channel = Channel.find(channels[0].location_id)
        Message.create(body: params[:channel][:message], author: user2, channel: @channel)
        render :show
        return @channel.id

      else
      
        user1 = User.find(params[:channel][:user_id])
        user2 = User.find(params[:channel][:curruser_id])
        @channel = Channel.new(name: (user1.username + ' ##$$#aS4#$$## ' + user2.username))
        @channel.users << user1
        @channel.users << user2

      end

    end

    if @channel.server and @channel.save
      
      render :show

    elsif @channel.save

      Message.create(body: params[:channel][:message], author: user2, channel: @channel)
      render :show

    else

      render json: @channel.errors.full_messages, status: 422

    end

  end

  def channel_params

    params.require(:channel).permit(:name, :server_id)

  end
end
