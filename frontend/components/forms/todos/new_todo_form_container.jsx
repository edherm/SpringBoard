import React from "react";
import TodoForm from "./todo_form";
import { connect } from "react-redux";
import { createTodo } from "../../../actions/todo_actions"

const msp = (state, ownProps) => {
  const {todoList, projectId} = ownProps;
  const todoListId = todoList.id;
  return ({
    todoListId,
    projectId,
    todo: {
      todo_list_id: todoListId,
      description: "",
      notes: ""
    },
    formType: "newTodo",
    toggleForm: ownProps.hideForm
  })
}

const mdp = dispatch => ({
  formAction: (todo) => dispatch(createTodo(todo))
})

export default connect(msp, mdp)(TodoForm);