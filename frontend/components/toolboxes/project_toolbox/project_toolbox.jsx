import React from "react";
import {Link} from "react-router-dom";
import MessagesPreview from "./previews/messages_preview";
import TodosPreview from "./previews/todos_preview";
import SchedulePreview from "./previews/schedule_preview";

class ProjectToolbox extends React.Component {
  constructor (props) {
    super(props)
  }
  
  componentDidMount () {
    this.props.fetchProject(this.props.match.params.projectId)
  }

  render () {
    if (!this.props.project) {
      return null
    }
    
    const {project, fetchTodoLists, fetchTodos, todoLists, todos} = this.props
    const { userId, projectId } = this.props.match.params

    return (
      <div className="toolbox-container">
        <div className="toolbox-main">
          <div className="toolbox-edit-link-container">
            <Link className="toolbox-project-edit-link"
              to={`/${userId}/projects/${projectId}/edit`}>
              ...
            </Link>
          </div>
          <div className="toolbox-header">
            <div className="toolbox-header-left">
            </div>
            <div className="toolbox-header-center">
              <h1>{project.name}</h1>
              <h3>{project.description}</h3>
            </div>
            <div className="toolbox-header-right">
            </div>
          </div>
          <div className="toolbox-body">
            <div className="toolbox-items-container">
              <ul className="toolbox-items-ul">
                <Link to=""><MessagesPreview /></Link>
                <Link to={`/${userId}/projects/${projectId}/todoLists`}>
                  <TodosPreview 
                    fetchTodoLists={fetchTodoLists} 
                    fetchTodos={fetchTodos} 
                    projectId={projectId} 
                    todoLists={todoLists} 
                    todos={todos} 
                  />
                </Link>
                <Link to=""><SchedulePreview /></Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectToolbox;