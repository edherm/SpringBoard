class UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      render json: :show
    else
      render json: @user.errors.full_messages
    end
  end


  def new
    @user = User.new
  end

  private
  def user_params
    params.require(:user).permit(:email, :name, :password)
  end
end
