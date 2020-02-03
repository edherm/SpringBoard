import { connect } from "react-redux";
import TodoListForm from "./todo_list_form";
import { createTodoList } from "../../../actions/todo_list_actions";
import { fetchProject } from "../../../actions/project_actions";

const msp = (state, ownProps) => {
  return {
    errors: Object.values(state.errors.todoLists),
    todoList: {
      name: "",
      details: ""
    },
    project: state.entities.projects[ownProps.match.params.projectId],
    formType: "createTodoList",
    hideForm: ownProps.hideForm,
    history: ownProps.history
  }
}

const mdp = dispatch => {
  return {
    todoListAction: (projectId, todoList) => 
      dispatch(createTodoList(projectId, todoList)),
    fetchProject: projectId => 
      dispatch(fetchProject(projectId))
  }
}

export default connect(msp, mdp)(TodoListForm);