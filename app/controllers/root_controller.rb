class RootController < ApplicationController
  def index
    @ip_address = request.remote_ip
  end
end
