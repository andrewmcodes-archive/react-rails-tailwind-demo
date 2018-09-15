class WelcomeController < ApplicationController
  def index
    @welcome_props = { name: "Stranger" }
  end
end
