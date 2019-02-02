Rails.application.routes.draw do

  resources :chat_messages, only: %i(index create)

  get "*route", to: "root#index"
  root to: "root#index"

  mount ActionCable.server => '/cable'
end
