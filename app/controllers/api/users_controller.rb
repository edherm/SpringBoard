class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    # debugger
    if @user.save
      # debugger
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    # debugger
  end


  def new
    @user = User.new
  end

  private
  def user_params
    params.require(:user).permit(:email, :name, :password)
  end
end
