import React from "react";
import { Link } from "react-router-dom";
import Todo from "./todos/todo"
import NewTodoFormContainer from "../forms/todos/new_todo_form_container";

class TodoList extends React.Component {
  constructor (props) {
    super(props);
  }

  
  componentDidMount () {
    this.props.fetchTodos(this.props.projectId, this.props.todoList.id)
  }

  render () {
    const { todoList, page, todos, projectId, hideForm } = this.props;
    const todoListLink = page === "index" ? (`./todoLists/${todoList.id}`) : ("#");
    
    if (todos.length === 0) {
      return null;
    }
    return (
      <>
        <ul className="todos-ul">
          <li className={`todo-list-title ${page}`}>
            <Link to={todoListLink} >
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
        <NewTodoFormContainer 
          todoList={todoList} 
          projectId={projectId} 
        />
      </>
    )
  }
}

export default TodoList;