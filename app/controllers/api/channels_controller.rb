class Api::ChannelsController < ApplicationController

    def index
        server = Server.find(params[:id])
        @channels = server.channels
        render :index
    end


    def show
        @channel = Channel.find(params[:id])

        render :show
    end


end