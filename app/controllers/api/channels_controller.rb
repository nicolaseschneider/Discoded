class Api::ChannelsController < ApplicationController

    def index
        server = Server.includes(:channels).find(params[:id])
        @channels = server.channels
        render :index
    end


    def show
        @channel = Channel.find(params[:id])

        render :show
    end


end