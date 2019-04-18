class CallsController < ApplicationController
    def create
        head :no_content

        ActionCable.server.broadcast("vid_channel_" + params[:id], v_call_params)
    end

    private
    
    def v_call_params
        params.permit(:type, :from, :to, :sdp, :candidate, :id, :call)
    end
end