class Api::TodoListsController < ApplicationController
  def index
    project = Project.find_by(id: params[:project_id])
    # debugger
    @todo_lists = project.todo_lists
    # @todos = 
  end

  def show
    # debugger
    @todo_list = TodoList.find_by(id: params[:id])
  end

  def new

  end

  def create
    project = Project.find_by(id: params[:project_id])
    debugger
    @todo_list = project.todo_lists.new(todo_list_params)

    if @todo_list.save
      render :show
    else
      render json: @todo_list.errors.full_messages, status: 404
    end
  end

  def edit
    @todo_list = TodoList.find_by(id: params[:id])
  end

  def update
    @todo_list = TodoList.find_by(id: params[:id])
    # debugger
    if @todo_list.update_attributes(todo_list_params)
      render :show
    else
      render json: @todo_list.errors.full_messages, status: 404
    end
  end

  def destroy
    @todo_list = TodoList.find_by(id: params[:id])
    @todo_list.destroy
  end

  private
  def todo_list_params
    params.require(:todo_list).permit(:name, :details)
  end
end
