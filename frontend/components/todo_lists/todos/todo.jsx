import React from "react";
import { connect } from "react-redux";

class Todo extends React.Component {
  constructor (props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);;
  }

  handleClick (e) {
    // projectId, todoListId, todo
    console.log("clicked a checkbox")
    debugger
    // this.props.updateTodo
    // this.props.todo.todo_list_id
  }


  render () {
    const {todo, page} = this.props;
    return (
      <li key={todo.id} className="todos-item" >
        <div onClick={this.handleClick} className={`todolist-checkbox ${todo.complete} ${page}`}></div>
        <span className={`todo-item-description ${page}`}>{todo.description}</span>
      </li>
    )
  }
}


export default Todo;