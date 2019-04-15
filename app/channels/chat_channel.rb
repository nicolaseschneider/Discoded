class ChatChannel < ApplicationCable::Channel
  def subscribed
    channel = Channel.find(params[:id])
    stream_for channel
    load(params[:id])
  end
  def speak(data)
    channel = Channel.find(data['channel_id'])
    message = Message.new(body: data['message'],
     channel: channel, author_id: data['author_id'])

    if message.save
      socket = { 
                author: message.author.username,
                message: message.body, 
                date: message.created_at.to_formatted_s(:long_ordinal),
                type: 'message' 
              }
      ChatChannel.broadcast_to(channel, socket)
    end
  end

  def load(id)

    channel = Channel.includes(:messages).find(id)
    messages = channel.messages
    socket = {
              messages: messages.collect(&:body),
              authors: messages.map{|msg| msg.author.username},
              dates: messages.map{|msg| msg.created_at.to_formatted_s(:long_ordinal)},
              type: 'messages' 
            }
    ChatChannel.broadcast_to(channel, socket)
  end
  
  def unsubscribed

  end

 
end
