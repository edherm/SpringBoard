class Api::ProjectsController < ApplicationController
  def index
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
    @project = current_user.managed_projects.new(project_params)

    if @project.save

      render :show
    else

      render json: @project.errors.full_messages, status: 404
    end
  end

  def edit
    @project = Project.find(params[:id])
    # render :show
  end

  def update
    @project = Project.find(params[:id])
    if @project.update_attributes(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: 404
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
  end

  private
  def project_params
    params.require(:project).permit(:name, :description)
  end
end
