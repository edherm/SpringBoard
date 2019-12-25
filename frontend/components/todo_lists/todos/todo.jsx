import React from "react";

class Todo extends React.Component {


  render () {
    const {todo, page} = this.props;
    return (
      <li key={todo.id} className="todos-item" >
        <div className={`todolist-checkbox ${todo.complete} ${page}`}></div>
        <span className={`todo-item-description ${page}`}>{todo.description}</span>
      </li>
    )
  }
}

export default Todo;