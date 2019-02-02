Rails.application.routes.draw do
  get "*route", to: "root#index"
  root to: "root#index"

  mount ActionCable.server => '/cable'
end
