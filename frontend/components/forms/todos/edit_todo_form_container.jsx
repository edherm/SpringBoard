import React from 'react';
import { connect } from 'react-redux';
import TodoForm from './todo_form';
import { updateTodo, deleteTodo } from '../../../actions/todo_actions';

const msp = (state, ownProps) => {
  const { canEdit, toggleForm, match, history } = ownProps;
  const { todoId, userId, projectId, todoListId } = match.params;
  return {
    canEdit: canEdit,
    toggleForm: toggleForm,
    match: match,
    history: history,
    todo: state.entities.todos[todoId],
    userId,
    projectId,
    todoListId,
    formType: 'edit-todo',
  };
};

const mdp = (dispatch) => ({
  formAction: (todo) => dispatch(updateTodo(todo)),
  deleteTodo: (todoId) => dispatch(deleteTodo(todoId)),
});

export default connect(msp, mdp)(TodoForm);
