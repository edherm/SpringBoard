import React from "react";
import TodoForm from "./todo_form";
import { connect } from "react-redux";
import { createTodo } from "../../../actions/todo_actions"

const msp = (state, ownProps) => {
  return ({
    todoListId: ownProps.todoList.id,
    projectId: ownProps.projectId,
    todo: {
      description: "",
      notes: ""
    },
    formType: "newTodo"
  })
}

const mdp = dispatch => ({
  formAction: (projectId, todoListid, todo) => dispatch(createTodo(projectId, todoListid, todo))
})

export default connect(msp, mdp)(TodoForm);