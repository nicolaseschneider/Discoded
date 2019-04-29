class VideoChannel < ApplicationCable::Channel
  def subscribed
    stream_from "vid_channel_" + params[:id]
  end

  def unsubscribed
  end
end