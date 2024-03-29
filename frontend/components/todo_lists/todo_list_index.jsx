import React from 'react';
import TodoListList from './todo_list_list';
import { ToolboxNavBar } from '../toolboxes/toolbox_nav_bar';
import TodoListCreateContainer from '../forms/todo_lists/todo_list_create_container';

class TodoListIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newListForm: 'hidden',
    };

    this.revealForm = this.revealForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  componentDidMount() {
    const projectId = this.props.match.params.projectId;
    this.props.fetchTodoLists(projectId);
    this.props.fetchProject(projectId);
  }

  revealForm() {
    this.setState({ newListForm: 'revealed' });
  }

  hideForm(e) {
    if (e) {
      e.preventDefault();
    }
    this.setState({ newListForm: 'hidden' });
  }

  render() {
    const { todoLists, project, match, history } = this.props;

    if (!todoLists) return null;

    return (
      <div className="toolbox-container  todo-list-index">
        {!project ? null : <ToolboxNavBar topic="todoList" />}
        <div className="toolbox-main todo-list-index">
          <div className="toolbox-header-bordered todo-list-index">
            <div className="toolbox-header-left todo-list-index">
              <div onClick={this.revealForm} className="todos-index-new-list">
                <div>
                  <span className="new-list-plus">+</span>
                  <label className="new-list-label">New List</label>
                </div>
              </div>
            </div>
            <div className="toolbox-header-center todo-list-index">
              <h1>To-dos</h1>
              <h4>0/15</h4>
            </div>
            <div className="toolbox-header-right todo-list-index"></div>
          </div>
          <div className="toolbox-body todo-list-index">
            <div className={`expanding-form ${this.state.newListForm}`}>
              <div className="expanding-form-container">
                <TodoListCreateContainer
                  hideForm={this.hideForm}
                  match={match}
                  history={history}
                />
              </div>
            </div>
            <TodoListList page="index" />
          </div>
        </div>
      </div>
    );
  }
}

export default TodoListIndex;

{
  /* <ul className="todo-lists-ul">
  {todoLists.map((todoList) => {
    return (
      <li key={todoList.id} className="todo-lists-li">
        <TodoList
          todoList={todoList}
          projectId={projectId}
          page="index"
          fetchTodos={fetchTodos}
          todos={todos}
          updateTodo={updateTodo}
          userId={userId}
        />
      </li>
    );
  })}
</ul>; */
}
