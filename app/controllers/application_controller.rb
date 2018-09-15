class ApplicationController < ActionController::Base
  layout "hello_world"

  def index
    @hello_world_props = { name: "Stranger" }
  end
end
