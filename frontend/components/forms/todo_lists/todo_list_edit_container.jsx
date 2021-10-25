import React from "react";
import { connect } from "react-redux";
import { updateTodoList, fetchTodoList, deleteTodoList } from "../../../actions/todo_list_actions";
import { fetchProject } from "../../../actions/project_actions";
import TodoListForm from "./todo_list_form";

class TodoListEdit extends React.Component {
  componentDidMount() {
    this.props.fetchTodoList(this.props.todoList.id);
  }

  render () {
    const { 
      project, match, history, userId, 
      todoList, formType, hideForm, 
      todoListAction, deleteTodoList 
    } = this.props;
    return (
      <TodoListForm 
        todoList={todoList} 
        project={project} 
        formType={formType} 
        match={match} 
        history={history} 
        userId={userId} 
        hideForm={hideForm} 
        todoListAction={todoListAction} 
        deleteTodoList={deleteTodoList}
      />
    )
  }
}

const msp = (state, ownProps) => {
  
  return {
    errors: Object.values(state.errors.todoLists),
    todoList: state.entities.todo_lists[ownProps.match.params.todoListId],
    project: state.entities.projects[ownProps.match.params.projectId],
    formType: "editTodoList",
    history: ownProps.history,
    match: ownProps.match,
    userId: ownProps.match.params.userId,
    hideForm: ownProps.hideForm
  }
}

const mdp = dispatch => {
  return {
    todoListAction: (projectId, todoList) =>
      dispatch(updateTodoList(projectId, todoList)),
    fetchTodoList: (todoListId) => 
      dispatch(fetchTodoList(todoListId)),
    deleteTodoList: (projectId, todoListId) => 
      dispatch(deleteTodoList(projectId, todoListId))
  }
}

export default connect(msp,mdp)(TodoListEdit);