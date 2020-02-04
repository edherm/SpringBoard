import React from "react";
import connect from "react-redux";
import TodoForm from "./todo_form";
import { updateTodo } from "../../../actions/todo_actions";

const msp = (state, ownProps) => {
  return ({
    canEdit: ownProps.canEdit,
    toggleForm: ownProps.toggleForm,
    match: ownProps.match,
    history: ownProps.history,
    todo: state.entities.todos[ownProps.match.params.todoId],
    userId: ownProps.match.params.userId,
    projectId: ownProps.match.params.projectId,
    todoListId: ownProps.match.params.todoListId,
    formType: "edit-todo"
  })
};

const mdp = dispatch => {
  return ({
    formAction: (projectId, todoListId, todo) => 
      dispatch(updateTodo(projectId, todoListId, todo))
  })
};


export default connect(msp, mdp)(TodoForm);