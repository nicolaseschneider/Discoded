class ChatChannel < ApplicationCable::Channel
  def subscribed
    puts params
    channel = Channel.find(params[:id])
    stream_for channel
    load(params[:id])
  end
  def speak(data)
    channel = Channel.find(data['channel_id'])
    message = Message.new(body: data['message'], channel: channel, author_id: data['author_id'])

    if message.save
      socket = { author: message.author.username, message: message.body, type: 'message' }
      ChatChannel.broadcast_to(channel, socket)
    end
  end

  def load(id)

    channel = Channel.includes(:messages).find(id)
    messages = channel.messages.collect(&:body)
    socket = {messages: messages, type: 'messages' }
    ChatChannel.broadcast_to(channel, socket)
  end
  
  def unsubscribed

  end

 
end
