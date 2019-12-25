import React from "react";
import { Link } from "react-router-dom";
import Todo from "./todos/todo"
import NewTodoFormContainer from "../forms/todos/new_todo_form_container";

class TodoList extends React.Component {
  constructor (props) {
    super(props);
  }

  
  componentDidMount () {
    debugger
    this.props.fetchTodos(this.props.projectId, this.props.todoList.id)
    debugger
  }

  render () {
    const { todoList, page, todos } = this.props;
    debugger
    if (!todos) {
      return null;
    }
    return (
      <>
        <ul className="todos-ul">
          <li className={`todo-list-title ${page}`}>
            <Link to={`./todoLists/${todoList.id}`} >
              <p>0/6 completed</p>
              <h3>{todoList.name}</h3>
            </Link>
          </li>
          {todos.map(todo => {
            debugger
            if (todo.todo_list_id === todoList.id) {
              return (<Todo page={page} todo={todo} />)
            }
          })}
        </ul>
        <NewTodoFormContainer />
      </>
    )
  }
}

export default TodoList;