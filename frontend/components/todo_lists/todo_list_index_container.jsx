import {connect} from "react-redux";
import TodoListIndex from "./todo_list_index";
import { fetchTodoLists, createTodoList } from "../../actions/todo_list_actions";
import { fetchProject } from "../../actions/project_actions";

const msp = (state, ownProps) => {
  return {
    todoLists: Object.values(state.entities.todo_lists),
    project: state.entities.projects[ownProps.match.params.projectId]
  }
}

const mdp = dispatch => {

  return {
    fetchTodoLists: (projectId) => dispatch(fetchTodoLists(projectId)),
    fetchProject: (projectId) => dispatch(fetchProject(projectId)),
    createTodoList: (projectId, todoList) => dispatch(createTodoList(projectId, todoList))
  }
}

export default connect(msp, mdp)(TodoListIndex)