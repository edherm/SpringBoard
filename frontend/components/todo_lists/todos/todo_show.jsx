import React from "react";
import { ToolboxNavBar } from "../../toolboxes/toolbox_nav_bar";
import EditTodoFormContainer from "../../forms/todos/edit_todo_form_container";

class TodoShow extends React.Component {
  constructor (props) {
    super(props)

    this.state = { canEdit: false }

    this.toggleForm = this.toggleForm.bind(this);
  }

  componentDidMount () {

  }

  toggleForm(){
    this.setState({ canEdit: !this.state.canEdit})
  }
  
  render () {
    return (
      <div className="toolbox-container  todo-show">
        {!project ? null : (
          <ToolboxNavBar 
            topic="todo"
            userId={userId}
            project={project}
            match={match}
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