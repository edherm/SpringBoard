import React from "react";
import TodoForm from "./todo_form";
import { connect } from "react-redux";

class NewTodoForm extends React.Component { 
  constructor (props) {
    super(props);

    this.state = {
      newTodoForm: "hidden"
    }
    this.revealForm = this.revealForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  revealForm() {
    this.setState({ newTodoForm: "revealed" })
  }

  hideForm(e) {
    if (e) {
      e.preventDefault();
    }
    this.setState({ newTodoForm: "hidden" })
  }

  render () {
    return (
      <div className="new-todo-form-container">
        <input
          className="new-todo"
          type="submit"
          onClick={this.revealForm}
          value="Add a to-do"
        />
        <div className={`expanding-form ${this.state.newTodoForm}`} >
          <TodoForm 
            todo={this.props.todo} 
            formType={this.props.formType} 
            formAction ={this.props.formAction} 
          />
          <button onClick={this.hideForm}>Cancel</button>
        </div>
      </div>
    )
  }
}
const msp = (state) => ({
  todo: {
    description: "",
    notes: ""
  },
  formType: "newTodo"
})

const mdp = dispatch => ({
  formAction: todo => dispatch(createTodo(todo))
})

export default connect(msp, mdp)(NewTodoForm);