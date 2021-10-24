class Api::MessagesController < ApplicationController
  def index
    project = Project.find_by(id: params[:project_id])
    @messages = project.messages
  end

  def show
    @message = Message.find_by(id: params[:id])
  end

  def create
    project = Project.find_by(id: params[:project_id])
    @message = project.messages.new(message_params)

    if @message.save
      render :show
    else
      render json: @message.errors.full_messages, status: 404
    end
  end

  def edit
    @message = Message.find_by(id: params[:id])
  end

  def update
    @message = Message.find_by(id: params[:id])

    if @message.update_attributes(message_params)
      render :show
    else
      render json: @message.errors.full_messages, status: 404
    end
  end

  def destroy
    @message = Message.find_by(id: params[:id])
    @message.destroy
  end

  private
  def message_params
    params.require(:message).permit(:title, :category, :body)
  end
end
