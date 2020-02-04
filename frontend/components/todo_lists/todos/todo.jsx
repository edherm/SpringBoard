import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Todo extends React.Component {
  constructor (props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);;
  }

  handleClick (e) {
    const { projectId, todo, updateTodo } = this.props;
    todo.complete = (!todo.complete)
    updateTodo(projectId, todo.todo_list_id, todo)
  }


  render () {
    const {todo, page, userId, projectId, todoListId} = this.props;

    const checkbox = todo.complete ? (
      <i className="fas fa-check-square"></i>
    ) : (
      <i className="far fa-square"></i>
    )

    return (
      <li key={todo.id} className={`todos-item ${page}`} >
        <div 
          onClick={ page === "project" ? (null) : (this.handleClick) } 
          className={`todo-checkbox ${todo.complete} ${page}`}
        >
          {checkbox}
        </div>
        <span className={`todo-item-description ${todo.complete} ${page}`}>
          <Link to={`/${userId}/projects/${projectId}/todoLists/${todoListId}/${todo.id}`}>
            {todo.description}
          </Link>
        </span>
      </li>
    )
  }
}


export default Todo;