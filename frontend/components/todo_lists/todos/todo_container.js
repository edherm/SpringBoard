import { connect } from "react-redux";
import Todo from "./todo";
import { updateTodo } from "../../../actions/todo_actions";

const msp = state => {
  debugger
return {
  todo: this.state,
  projectId: ownProps.match.params.projectId
}};

const mdp = dispatch => ({
  updateTodo: (projectId, todoListId, todo) =>
    dispatch(updateTodo(projectId, todoListId, todo))
});

export default connect(msp, mdp)(Todo);