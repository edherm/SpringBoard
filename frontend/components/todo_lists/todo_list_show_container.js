import React from "react";
import { connect } from "react-redux";
import { fetchTodoList } from "../../actions/todo_list_actions";
import { fetchProject } from "../../actions/project_actions";
import { fetchTodos, createTodo } from "../../actions/todo_actions";
import TodoList from "./todo_list";
import { Link } from "react-router-dom";


class TodoListShow extends React.Component {
  constructor (props) {
    super(props)
  }
  componentDidMount () {
    debugger
    // const { todoListId, projectId } = this.props.match.params;
    this.props.fetchProject(this.props.match.params.projectId);
    this.props.fetchTodoList(this.props.match.params.projectId, this.props.match.params.todoListId);
  }

  render () {
    if (!this.props.todoList) return null

    const { todoList, project, fetchTodos, todos } = this.props
    const { userId, projectId } = this.props.match.params
    return(
      <div className="toolbox-container  todo-list-index">
        {!project ? null : (
          <div className="toolbox-nav">
            <i className="fas fa-th-large"></i>
            <Link to={`/${userId}/projects/${projectId}`}>{project.name}</Link>
            <p>></p>
            <Link to={`/${userId}/projects/${projectId}/todolists`} >To-dos</Link>
          </div>
        )}
        <div className="toolbox-main todo-list-index">
          <div className="toolbox-header-bordered todo-list-index">
            <div className="toolbox-header-left todo-list-index"></div >
            <div className="toolbox-header-center todo-list-index"></div >
            <div className="toolbox-header-right todo-list-index"></div>
          </div >
          <div className="toolbox-body todo-list-index">
            <TodoList 
            todoList={todoList} 
            page="show" 
            fetchTodos={fetchTodos} 
            projectId={project.id} 
            todos={todos} 
            />
           </div>
        </div>
      </div>
    )
  }
}



const msp = (state, ownProps) => {
  debugger
  return {
    project: state.entities.projects[ownProps.match.params.projectId],
    todoList: state.entities.todo_lists[ownProps.match.params.todoListId],
    todos: Object.values(state.entities.todos)
  } 
}

const mdp = dispatch => {
  return {
  fetchTodoList: (projectId, todoListId) => dispatch(fetchTodoList(projectId, todoListId)),
  fetchProject: projectId => dispatch(fetchProject(projectId)),
  fetchTodos: (projectId, todoListId) => dispatch(fetchTodos(projectId, todoListId)),
  createTodo: (projectId, todoListId, todo) => dispatch(createTodo(projectId, todoListId, todo))
  }
}

export default connect(msp, mdp)(TodoListShow)