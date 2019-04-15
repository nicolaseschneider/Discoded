class VideoChannel < ApplicationCable::Channel
  def subscribed
    stream_from "vid_channel_" + params[:id]
    # channel = Channel.find(params[:id])
    # stream_for channel
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end