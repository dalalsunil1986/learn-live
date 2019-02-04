class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'ChatChannel'
  end

  def chat(payload)
    message = ChatMessage.create(
      to: payload["to"],
      from: payload["from"],
      body: payload["body"],
      ip_address: payload["ipAddress"],
    )
    ActionCable.server.broadcast('ChatChannel', message.to_json)
  end
end
