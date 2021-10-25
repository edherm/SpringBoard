import React from 'react';
import { Link } from 'react-router-dom';
import TodoToggle from './todo_toggle';
import TodoCheckbox from './todo_checkbox';

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { todo, updateTodo } = this.props;
    todo.complete = !todo.complete;
    updateTodo(todo);
  }

  render() {
    const { todo, page, userId, projectId, todoListId } = this.props;

    return (
      <li key={todo.id} className={`todos-item ${page}`}>
        <TodoToggle todo={todo} page={page} />
        <span className={`todo-item-description ${todo.complete} ${page}`}>
          {page === 'project' ? (
            todo.description
          ) : (
            <Link
              to={`/${userId}/projects/${projectId}/todoLists/${todoListId}/${todo.id}`}
            >
              {todo.description}
            </Link>
          )}
        </span>
      </li>
    );
  }
}

export default Todo;

// <div
//   onClick={page === 'project' ? null : this.handleClick}
//   className={`todo-checkbox ${todo.complete} ${page}`}
// >
//   <TodoCheckbox checked={todo.complete} />
// </div>
