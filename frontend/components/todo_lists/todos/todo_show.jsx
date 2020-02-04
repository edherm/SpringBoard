import React from "react";
import TodoContainer from "./todo_container";
import { ToolboxNavBar } from "../../toolboxes/toolbox_nav_bar";
import EditTodoFormContainer from "../../forms/todos/edit_todo_form_container";

class TodoShow extends React.Component {
  
  
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
              <div onClick={this.revealForm} className="todos-index-new-list">
                <div>
                  <span className="new-list-plus">+</span>
                  <label className="new-list-label" >New List</label>
                </div>
              </div>
            </div>
            <div className="toolbox-header-center todo-list-index">
              <h1>To-dos</h1>
              <h4>0/15</h4>
            </div>
            <div className="toolbox-header-right todo-list-index">
            </div>
          </div>
          <div className="toolbox-body todo-list-index">
            <div className={`expanding-form ${this.state.newListForm}`}>
              <div className="expanding-form-container">
                <EditTodoFormContainer
                  hideForm={this.hideForm}
                  match={match}
                  history={history}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoShow;