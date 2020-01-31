import React from "react";
import TodoList from "../../../todo_lists/todo_list";

class TodosPreview extends React.Component {

  componentDidMount () {
    this.props.fetchTodoLists(this.props.projectId)
  }

  render () {
    const { todoLists, fetchTodos, projectId, todos } = this.props;

    // if (todoLists.length === 0) return null;

    return (
      <li className="toolbox-item-li">
        <h1 className="toolbox-item-header" >To-dos</h1>
        <div className="toolbox-item-body" >
          {todoLists.length === 0 ? (
            <div className="empty-preview-wrapper">
              <i className="fas fa-check-square"></i>
              <p>
                Make lists of work that needs to get done, assign items, set due 
                dates, and discuss.
              </p>
            </div>
          ) :(
            <ul className="todos-preview-ul" >
              {todoLists.map(todoList => {
                return (
                  <TodoList 
                    key={todoList.id} 
                    todoList={todoList}
                    projectId={projectId}
                    page="project"
                    fetchTodos={fetchTodos}
                    todos={todos} 
                    updateTodo={null}
                  />
                )
              })}
            </ul>
          )}
        </div>
      </li>
    )
  }
}

export default TodosPreview;

/* 
  <li className="todos-preview-li" >
    <div className="preview-list-container">
      <h2>Todo Title1</h2>
      <ul className="todos-ul" >
        <li className="todos-item" >
          <div className="todolist-checkbox false"></div>
          <span>Todo Item1</span>
        </li>
        <li className="todos-item" >
          <div className="todolist-checkbox false"></div>
          <span>Todo Item2</span>
        </li>
        <li className="todos-item" >
          <div className="todolist-checkbox false"></div>
          <span>Todo Item3</span>
        </li>
      </ul>
    </div>
  </li>
  <li className="todos-preview-li" >
    <div className="preview-list-container">
      <h2>Todo Title2</h2>
      <ul className="todos-ul" >
        <li className="todos-item" >
          <div className="todolist-checkbox false"></div>
          <span>Todo Item1</span>
        </li>
        <li className="todos-item" >
          <div className="todolist-checkbox false"></div>
          <span>Todo Item2</span>
        </li>
        <li className="todos-item" >
          <div className="todolist-checkbox false"></div>
          <span>Todo Item3</span>
        </li>
      </ul>
    </div>
  </li>
*/