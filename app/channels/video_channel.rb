class VideoChannel < ApplicationCable::Channel
  def subscribed
    stream_from "vid_channel_" + params[:id]
    # channel = Channel.find(params[:id])
    # stream_for channel
  end

  # def broadcast(options)
  #   channel_id = options["id"]
  #   type = options["data"]["type"]
  #   from = options["data"]["from"] || nil
  #   to = options["data"]["to"] || nil
  #   sdp = options["data"]["sdp"] || nil
  #   candidate = options["data"]["candidate"] || nil

  #   ActionCable.server.broadcast("voice_channel_#{channel_id}",
  #       type: type,
  #       from: from,
  #       to: to,
  #       sdp: sdp,
  #       candidate: candidate
  #     )
  # end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end