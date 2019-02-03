class GuestChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'GuestChatChannel'
  end

  def chat(payload)
    message = ChatMessage.create(to: payload["to"], from: payload["from"], body: payload["body"])
    ActionCable.server.broadcast('GuestChatChannel', message.to_json)
  end
end
