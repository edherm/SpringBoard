import { connect } from 'react-redux';
import TodoShow from './todo_show';
import { fetchTodo } from '../../../actions/todo_actions';
import { fetchProject } from '../../../actions/project_actions';
import { fetchTodoList } from '../../../actions/todo_list_actions';

const msp = (state, ownProps) => {
  return {
    todo: state.entities.todos[ownProps.match.params.todoId],
    todoList: state.entities.todo_lists[ownProps.match.params.todoListId],
    project: state.entities.projects[ownProps.match.params.projectId],
    userId: ownProps.match.params.userId,
    projectId: ownProps.match.params.projectId,
    todoListId: ownProps.match.params.todoListId,
    todoId: ownProps.match.params.todoId,
  };
};

const mdp = (dispatch) => {
  return {
    fetchTodo: (todoId) => dispatch(fetchTodo(todoId)),
    fetchTodoList: (projectId, todoListId) =>
      dispatch(fetchTodoList(projectId, todoListId)),
    fetchProject: (projectId) => dispatch(fetchProject(projectId)),
  };
};

export default connect(msp, mdp)(TodoShow);
