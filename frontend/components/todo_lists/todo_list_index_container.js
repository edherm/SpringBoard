import { connect } from 'react-redux';
import TodoListIndex from './todo_list_index';
import {
  fetchTodoLists,
  createTodoList,
} from '../../actions/todo_list_actions';
import { fetchProject } from '../../actions/project_actions';
import { fetchTodos, updateTodo } from '../../actions/todo_actions';
import { filterByProject } from '../../util/project_api_util';

const msp = (state, ownProps) => {
  const { projectId } = ownProps.match.params;
  return {
    todoLists: filterByProject(
      Object.values(state.entities.todo_lists),
      projectId
    ),
    project: state.entities.projects[projectId],
  };
};

const mdp = (dispatch) => {
  return {
    fetchTodoLists: (projectId) => dispatch(fetchTodoLists(projectId)),
    fetchProject: (projectId) => dispatch(fetchProject(projectId)),
    createTodoList: (projectId, todoList) =>
      dispatch(createTodoList(projectId, todoList)),
  };
};

export default connect(msp, mdp)(TodoListIndex);
