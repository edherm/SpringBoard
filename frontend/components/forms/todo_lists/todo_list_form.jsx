import React from "react";

class TodoListForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.todoList;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.todoListAction(this.state, this.props.match.params.projectId)
      .then(({ todoList }) => {
        if (this.props.formType === "createTodoList") {
          this.props.history.push(`./todoLists/${todoList.id}`)
        } else {
          this.props.hideForm();
        }
      })
  }

  handleInput(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleDelete(e) {
    e.preventDefault();

    const { userId, project, todoList, history, deleteTodoList } = this.props
    
    deleteTodoList(todoList.id).then(() => {
      history.push(`/${userId}/projects/${project.id}/todoLists`)
    })
  }

  render () {
    const { name, details } = this.state;

    return (
      <form onSubmit={this.handleSubmit} >
        <input
          className="new-list-name"
          type="text"
          placeholder="Name this list..."
          value={name}
          onChange={this.handleInput("name")}
        />
        <input
          className="new-list-details"
          type="text"
          placeholder="Add extra details"
          value={details}
          onChange={this.handleInput("details")}
        />
        <div className="new-list-buttons">
          <div className="submit-new-list" >
            <input type="submit" value={
              this.props.formType === "createTodoList" ? (
                "Add this list"
              ) : (
                "Save changes"
              )
            } 
            />
          </div>
          <button onClick={this.props.hideForm}>{
            this.props.formType === "createTodoList" ? "Cancel" : (
              "Discard changes"
            )
          }</button>
          {this.props.formType !== "editTodoList" ? null : (
            <button onClick={this.handleDelete}>Delete Todo List</button>
          )}
        </div>
      </form>
    )
  }
}

export default TodoListForm;