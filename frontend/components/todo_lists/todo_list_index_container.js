import { connect } from 'react-redux';
import TodoListIndex from './todo_list_index';
import {
  fetchTodoLists,
  createTodoList,
} from '../../actions/todo_list_actions';
import { fetchProject } from '../../actions/project_actions';
import { fetchTodos, createTodo, updateTodo } from '../../actions/todo_actions';
import { filterByProject } from '../../util/project_api_util';

const msp = (state, ownProps) => {
  const { projectId } = ownProps.match.params;
  return {
    todoLists: filterByProject(
      Object.values(state.entities.todo_lists),
      projectId
    ),
    todos: Object.values(state.entities.todos),
    project: state.entities.projects[projectId],
  };
};

const mdp = (dispatch) => {
  return {
    fetchTodoLists: (projectId) => dispatch(fetchTodoLists(projectId)),
    fetchTodos: (projectId, todoListId) =>
      dispatch(fetchTodos(projectId, todoListId)),
    fetchProject: (projectId) => dispatch(fetchProject(projectId)),
    createTodoList: (projectId, todoList) =>
      dispatch(createTodoList(projectId, todoList)),
    updateTodo: (projectId, todoListId, todo) =>
      dispatch(updateTodo(projectId, todoListId, todo)),
  };
};

export default connect(msp, mdp)(TodoListIndex);
