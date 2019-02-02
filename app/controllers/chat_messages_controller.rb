class ChatMessagesController < ApplicationController
  def index
    options = {}
    options[:display_name] = params[:display_name] if params[:display_name]
    options.merge({
      offset: params[:offset]||0,
      limit: params[:limit]||10
    })
    @chat_messages = ChatMessage.by(params[:participants].split(",")).where(options)

    render json: @chat_messages
  end

  def create
  end
end
