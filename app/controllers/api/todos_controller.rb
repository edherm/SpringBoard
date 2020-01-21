class Api::TodosController < ApplicationController
  def index
    @todo_list = TodoList.find_by(id: params[:todo_list_id])
    @todos = @todo_list.todos
  end
  
  def show
    @todo = Todo.find_by(id: params[:id])
  end

  def create
    todo_list = TodoList.find_by(id: params[:todo_list_id])
    @todo = todo_list.todos.new(todo_params)
    if @todo.save
      render :show
    else
      render json: @todo.errors.full_messages, status: 404
    end
  end

  def update
    @todo = Todo.find_by(id: params[:id])

    if @todo.update!(todo_params)
      render :show
    else
      render json: @todo.errors.full_messages, status:404
    end
  end

  def destroy
    @todo = Todo.find_by(id: params[:id])
    @todo.destroy
  end

  private
  def todo_params
    params.require(:todo).permit(:id, :description, :notes, :project_id, :complete, :todo_list_id)
  end
end
