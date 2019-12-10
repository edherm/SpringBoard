class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if @user
      debugger
      login(@user)
      render "/api/users/show"
    else
      debugger
      render json: ["Invalid email/password combo"], status: 404
    end
  end

  def destroy
    if logged_in?
      logout
      render json: {}
    else
      render json: ["No current user"], status: 404
    end
  end
end
