class Api::TodoListsController < ApplicationController
  def index
    user = User.find_by(id: params(:userId))
    @todoLists = user.todo_lists
  end

  def show

  end

  def new

  end

  def create

  end

  def edit

  end

  def update

  end

  def destroy

  end
end
