class Api::ProjectsController < ApplicationController
  def index
    # debugger
    user = User.find_by(id: params[:userId])
    @projects = user.managed_projects
  end

  def show
    @project = Project.find(params[:id])
  end

  def new
    @project = Project.new
  end

  def create
    # debugger
    @project = current_user.managed_projects.new(project_params)

    if @project.save
      # debugger
      render :show
    else
      # debugger
      render json: @project.errors.full_messages, status: 404
    end
  end

  def edit
    @project = Project.find(params[:id])
  end

  def update
    @project = Project.find(params[:id])
    if @project.update_attributes(project_params)
      render "/api/projects/#{@project.id}"
    else
      render json: @project.errors.full_messages, status: 404
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    render :index
  end

  private
  def project_params
    params.require(:project).permit(:name, :description)
  end
end
