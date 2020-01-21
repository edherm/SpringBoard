import React from "react";
import { Link } from "react-router-dom";
import Todo from "./todos/todo";
import NewTodoFormContainer from "../forms/todos/new_todo_form_container";

class TodoList extends React.Component {
  constructor (props) {
    super(props);
  }

  
  componentDidMount () {
    window.scrollTo(0, 0);
    this.props.fetchTodos(this.props.projectId, this.props.todoList.id)
  }

  render () {
    const { todoList, page, todos, projectId, hideForm, updateTodo } = this.props;
    const todoListLink = page === "index" ? (`./todoLists/${todoList.id}`) : ("#");

    if (todos.length === 0) {
      return null;
    }
    
    let completeTodos = [];
    let incompleteTodos = [];
    let numCompleted = 0;
    let numTodos = 0;
    
    todos.forEach(todo => {
      if (todo.todo_list_id === todoList.id) {
        numTodos++;
        if (todo.complete) {
          completeTodos.push(todo);
          numCompleted++;
        } else {
          incompleteTodos.push(todo)
        }
      }
    })

    return (
      <>
        <ul className="todos-ul">
          <li className={`todo-list-title ${page}`}>
            <Link to={todoListLink} >
              <p>{numCompleted}/{numTodos} completed</p>
              <h3>{todoList.name}</h3>
            </Link>
          </li>
          {incompleteTodos.map(todo => {
            return (
              <Todo
                key={todo.id}
                page={page}
                todo={todo}
                projectId={projectId}
                updateTodo={updateTodo}
              />
            )
          })}
          <NewTodoFormContainer
            page={page}
            todoList={todoList}
            projectId={projectId}
          />
          {completeTodos.map(todo => {
            return (
              <Todo
                key={todo.id}
                page={page}
                todo={todo}
                projectId={projectId}
                updateTodo={updateTodo}
              />
            )
          })}
        </ul>
      </>
    )
  }
}

export default TodoList;