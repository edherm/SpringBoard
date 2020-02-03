import React from "react";

class TodoListForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.todoList;
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.todoListAction(this.props.match.params.projectId, this.state)
      .then(({ todoList }) => {
        this.props.hideForm();
        // this.setState
        if (this.props.formType === "createTodoList") {
          this.props.history.push(`./todoLists/${todoList.id}`)
        }
      })
  }

  handleInput(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    }
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
        </div>
      </form>
    )
  }
}

export default TodoListForm;