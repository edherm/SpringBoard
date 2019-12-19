import React from "react";
import {Link} from "react-router-dom";
import TodoList from "./todo_list";

class TodoListIndex extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.fetchTodoLists(this.props.match.params.projectId);
    this.props.fetchProject(this.props.match.params.projectId);
  }
  
  render () {
    const { todoLists, project } = this.props;
    const { projectId, userId } = this.props.match.params;
    
    return (
      <div className="toolbox-container  todo-list-index">
        { !project ? null : (
          <div className="toolbox-nav">
            <i className="fas fa-th-large"></i>
            <Link to={`/${userId}/projects/${projectId}`}>{project.name}</Link>
          </div>
        )}
        <div className="toolbox-main todo-list-index">
          <div className="toolbox-header-bordered todo-list-index">
            <div className="toolbox-header-left todo-list-index">
              <Link to="" className="todos-index-new-list">
                <div>
                  <span className="new-list-plus">+</span>
                  <label className="new-list-label" >New List</label>
                </div>
              </Link>
            </div>
            <div className="toolbox-header-center todo-list-index">
              <h1>To-dos</h1>
              <h4>0/15</h4>
            </div>
            <div className="toolbox-header-right todo-list-index">
            </div>
          </div>
          <div className="toolbox-body todo-list-index">
            <ul className="todo-lists-ul">
              {todoLists.map( todoList => 
                <li className="todo-lists-li">
                  <TodoList todoList={todoList} page="index" key={todoList.id} />
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoListIndex;