import {connect} from "react-redux";
import TodoListIndex from "./todo_list_index";
import { fetchTodoLists, createTodoList } from "../../actions/todo_list_actions";
import { fetchProject } from "../../actions/project_actions";
import { fetchTodos, createTodo, updateTodo } from "../../actions/todo_actions";

const msp = (state, ownProps) => {
  return {
    todoLists: Object.values(state.entities.todo_lists),
    todos: Object.values(state.entities.todos),
    project: state.entities.projects[ownProps.match.params.projectId]
  }
}

const mdp = dispatch => {

  return {
    fetchTodoLists: (projectId) => 
      dispatch(fetchTodoLists(projectId)),
    fetchTodos: (projectId, todoListId) => 
      dispatch(fetchTodos(projectId, todoListId)),
    fetchProject: (projectId) => 
      dispatch(fetchProject(projectId)),
    createTodoList: (projectId, todoList) => 
      dispatch(createTodoList(projectId, todoList)),
    updateTodo: (projectId, todoListId, todo) =>
      dispatch(updateTodo(projectId, todoListId, todo))
    // createTodo: (projectId, todoListId, todo) => dispatch(createTodo(projectId, todoListId, todo))
  }
}

export default connect(msp, mdp)(TodoListIndex)