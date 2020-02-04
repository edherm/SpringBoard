import React from "react";
import { ToolboxNavBar } from "../../toolboxes/toolbox_nav_bar";
import EditTodoFormContainer from "../../forms/todos/edit_todo_form_container";

class TodoShow extends React.Component {
  constructor (props) {
    super(props)

    this.state = { canEdit: "disabled" }

    this.toggleForm = this.toggleForm.bind(this);
  }

  componentDidMount () {
    const { projectId, todoListId, todoId, fetchTodo, fetchProject, fetchTodoList } = this.props;
    
    fetchProject(projectId);
    fetchTodoList(projectId, todoListId);
    fetchTodo(projectId, todoListId, todoId);
  }

  toggleForm(){
    let newState;
    if (this.state.canEdit) {
      newState = "";
    } else {
      newState= "disabled";
    }

    this.setState({ canEdit: newState});
  }
  
  render () {
    const { todo, todoList, project, userId, match, history } = this.props;

    if (!todo || !todoList || !project) return null;

    return (
      <div className="toolbox-container  todo-show">
        {!project ? null : (
          <ToolboxNavBar 
            topic="todoList"
            userId={userId}
            project={project}
            match={match} 
            title={todoList.name} 
            obj={todoList}
          />
        )}
        <div className="toolbox-main todo-list-index">
          <div className="toolbox-header-bordered todo-list-index">
            <div className="toolbox-header-left todo-list-index">
            </div>
            <div className="toolbox-header-center todo-list-index">
            </div>
            <div className="toolbox-header-right todo-list-index">
              <div className="toolbox-edit-link-container">
                <div
                  className="message toolbox-edit-link"
                  onClick={this.toggleForm}
                >
                  ...
                </div>
              </div>
            </div>
          </div>
          <div className="toolbox-body todo-list-index">
            <EditTodoFormContainer
              canEdit={this.state.canEdit} 
              toggleForm={this.toggleForm}
              match={match}
              history={history}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default TodoShow;