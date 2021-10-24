import React from "react";

class TodoForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = this.props.todo

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }  

  handleChange (field) {
    return e => this.setState(({ [field]: e.target.value }))
  }

  handleSubmit (e) {
    e.preventDefault();
    const { projectId, todoListId } = this.props;

    // const todo = Object.assign({}, this.state);
    this.props.formAction(projectId, todoListId, this.state).then(
      () => this.props.toggleForm()
    )
  }

  handleDelete (e) {
    e.preventDefault();
    const { userId, projectId, todo, todoListId, history, deleteTodo } = this.props

    deleteTodo(todo.id).then(() => {
      history.push(`/${userId}/projects/${projectId}/todoLists/${todoListId}`)
    })
  }

  render () {
    const { description, notes, complete } = this.state;

    const checkbox = complete === undefined ? (
        <i className="far fa-square"></i>
      ) : (
        <i className="fas fa-check-square"></i>
      )

    return (
      <form 
        className={`${this.props.formType}-form${this.props.canEdit ? ` ${this.props.canEdit}` : ""}`} 
        onSubmit={this.handleSubmit} 
        >
        <fieldset disabled={this.props.formType === "new-todo" ? "" : this.props.canEdit} >
        <div className={`todo-description-row ${this.props.formType}`}>
          <div className={`todo-checkbox ${
            this.state.complete === undefined ? (
              'false'
            ) : (
              this.state.complete
            )
          } ${this.props.formType}`}>
            {checkbox}
          </div>
          <div className={`todo-description-input ${this.props.formType}`}>
            <input 
              type="text" 
              placeholder="Describe this to-do..." 
              value={description}
              onChange={this.handleChange("description")} 
            />
          </div>
        </div>
        <div className={`todo-notes-input ${this.props.formType}`}>
          <label>
            <span>Notes</span>
          </label>
          <input 
            type="text" 
            placeholder= "Add extra details" 
            value={notes} 
            onChange={this.handleChange("notes")}
          />
        </div>
        {this.props.canEdit ? null : (
          <div className={`submit-todo-container ${this.props.formType}`}>
            <input type="submit" value={this.props.formType === "new-todo" ? (
              "Add this to-do"
              ) : (
                "Save changes"
              )} 
            />
            <button onClick={this.props.toggleForm}>Cancel</button>
              {this.props.formType === "new-todo" ? null : (
                <button onClick={this.handleDelete}>Delete Todo</button>
              )}
          </div>
        )}
        </fieldset>
      </form>
    )
  }

}

export default TodoForm;