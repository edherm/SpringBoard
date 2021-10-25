import React from "react";
import { connect } from "react-redux";
import { fetchTodoList } from "../../actions/todo_list_actions";
import { fetchProject } from "../../actions/project_actions";
import { fetchTodos, createTodo, updateTodo } from "../../actions/todo_actions";
import TodoList from "./todo_list";
import { Link } from "react-router-dom";
import { ToolboxNavBar } from "../toolboxes/toolbox_nav_bar";
import TodoListEditContainer from "../forms/todo_lists/todo_list_edit_container";


class TodoListShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = { editListForm: "hidden" };

    this.revealForm = this.revealForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
    this.props.fetchTodoList(
      this.props.match.params.projectId,
      this.props.match.params.todoListId
    );
  }

  revealForm() {
    this.setState({ editListForm: "revealed" });
  }

  hideForm(e) {
    if (e) {
      e.preventDefault();
    }
    this.setState({ editListForm: "hidden" });
  }

  render() {
    if (!this.props.todoList || !this.props.project) return null;

    const {
      todoList,
      project,
      fetchTodos,
      updateTodo,
      todos,
      match,
      history
    } = this.props;

    const { userId, projectId } = this.props.match.params;
    return (
      <div className="toolbox-container  todo-list-index">
        {!project ? null : (
          <ToolboxNavBar topic="todoList" />
        )}
        <div className="toolbox-main todo-list-index">
          <div className="toolbox-header-bordered todo-list-index">
            <div className="toolbox-header-left todo-list-index"></div>
            <div className="toolbox-header-center todo-list-index"></div>
            <div className="toolbox-header-right todo-list-index">
              <div className="toolbox-edit-link-container">
                <div
                  className="message toolbox-edit-link"
                  onClick={this.revealForm} 
                >
                  ...
                </div>
              </div>
            </div>
          </div>
          <div className="toolbox-body todo-list-index">
            <div className={`expanding-form ${this.state.editListForm}`}>
              <div className="expanding-form-container">
                <TodoListEditContainer 
                  hideForm={this.hideForm} 
                  match={match} 
                  history={history} 
                  userid={userId} 
                />
              </div>
            </div>
            
            <TodoList
              todoList={todoList}
              page="show"
              fetchTodos={fetchTodos}
              projectId={project.id}
              todos={todos}
              updateTodo={updateTodo} 
              userId={userId}
            />
          </div>
        </div>
      </div>
    );
  }
}



const msp = (state, ownProps) => {
  return {
    project: state.entities.projects[ownProps.match.params.projectId],
    todoList: state.entities.todo_lists[ownProps.match.params.todoListId],
    todos: Object.values(state.entities.todos)
  } 
}

const mdp = dispatch => {
  return {
    fetchTodoList: (projectId, todoListId) =>
      dispatch(fetchTodoList(projectId, todoListId)),
    fetchProject: projectId => dispatch(fetchProject(projectId)),
    fetchTodos: (todoListId) => dispatch(fetchTodos(todoListId)),
    createTodo: (todo) => dispatch(createTodo(todo)),
    updateTodo: (todo) =>
      dispatch(updateTodo(todo))
  };
}

export default connect(msp, mdp)(TodoListShow)