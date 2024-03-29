import React from 'react';
import { Link } from 'react-router-dom';
import Todo from './todos/todo';
import NewTodoFormContainer from '../forms/todos/new_todo_form_container';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      completeTodos: [],
      incompleteTodos: [],
      numCompleted: 0,
      numTodos: 0,
      newTodoForm: 'hidden',
    };

    this.hideForm = this.hideForm.bind(this);
    this.revealForm = this.revealForm.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchTodos(this.props.todoList.id).then((res) => {
      let completeTodos = [];
      let incompleteTodos = [];
      let numCompleted = 0;
      let numTodos = 0;

      Object.values(res.todos).forEach((todo) => {
        if (todo.todo_list_id === this.props.todoList.id) {
          numTodos++;
          if (todo.complete) {
            completeTodos.push(todo);
            numCompleted++;
          } else {
            incompleteTodos.push(todo);
          }
        }
      });
      this.setState((oldState) => ({
        ...oldState,
        ...oldState.todos,
        completeTodos,
        incompleteTodos,
        numCompleted,
        numTodos,
        loaded: true,
      }));
    });
  }

  hideForm(e) {
    if (e) {
      e.preventDefault();
    }
    this.setState((oldState) => ({ ...oldState, newTodoForm: 'hidden' }));
  }

  revealForm() {
    this.setState((oldState) => ({ ...oldState, newTodoForm: 'revealed' }));
  }

  render() {
    const { todoList, page, todos, projectId, updateTodo, userId } = this.props;
    const todoListLink = page === 'index' ? `./todoLists/${todoList.id}` : '#';
    const { loaded, completeTodos, incompleteTodos, numCompleted, numTodos } =
      this.state;
    // if (todos.length === 0) {
    //   return null;
    // }

    // let completeTodos = [];
    // let incompleteTodos = [];
    // let numCompleted = 0;
    // let numTodos = 0;

    // todos.forEach((todo) => {
    //   if (todo.todo_list_id === todoList.id) {
    //     numTodos++;
    //     if (todo.complete) {
    //       completeTodos.push(todo);
    //       numCompleted++;
    //     } else {
    //       incompleteTodos.push(todo);
    //     }
    //   }
    // });

    const todoListTitle =
      page === 'preview' ? (
        <>
          <p>
            {numCompleted}/{numTodos} completed
          </p>
          <h3>{todoList.name}</h3>
        </>
      ) : (
        <Link to={todoListLink}>
          <p>
            {numCompleted}/{numTodos} completed
          </p>
          <h3>{todoList.name}</h3>
        </Link>
      );

    return !loaded ? null : (
      <>
        <ul className="todos-ul">
          <li className={`todo-list-title ${page}`}>{todoListTitle}</li>
          {incompleteTodos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                page={page}
                todo={todo}
                projectId={projectId}
                userId={userId}
                todoListId={todoList.id}
                updateTodo={updateTodo}
              />
            );
          })}
          {page === 'preview' ? null : (
            <div className="new-todo-form-container">
              <input
                className="new-todo"
                type="submit"
                onClick={this.revealForm}
                value="Add a to-do"
              />
              <div className={`expanding-form ${this.state.newTodoForm}`}>
                <NewTodoFormContainer
                  page={page}
                  todoList={todoList}
                  projectId={projectId}
                  hideForm={this.hideForm}
                />
              </div>
            </div>
          )}
          {completeTodos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                page={page}
                todo={todo}
                projectId={projectId}
                userId={userId}
                todoListId={todoList.id}
                updateTodo={updateTodo}
              />
            );
          })}
        </ul>
      </>
    );
  }
}

export default TodoList;
