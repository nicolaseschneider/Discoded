class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_for 'chat_channel'
    load
  end
  def speak(data)
    message = Message.new(body: data['message'])
    if message.save
      socket = { message: message.body, type: 'message' }
      ChatChannel.broadcast_to('chat_channel', socket)
    end
    load
  end

  def load
    messages = Message.all.collect(&:body)
    socket = {messages: messages, type: 'messages' }
    ChatChannel.broadcast_to('chat_channel', socket)
  end

  def unsubscribed
  end
end
