import React from "react";
import TodoCheckbox from "../../todo_lists/todos/todo_checkbox";

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
    this.props.formAction(this.state).then(
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
    const { canEdit, formType, toggleForm } = this.props;

    return (
      <form 
        className={`${formType}-form${canEdit ? ` ${canEdit}` : ""}`} 
        onSubmit={this.handleSubmit} 
        >
        <fieldset disabled={formType === "new-todo" ? "" : canEdit} >
        <div className={`todo-description-row ${formType}`}>
          <div className={`todo-checkbox ${
            this.state.complete === undefined ? (
              'false'
            ) : (
              this.state.complete
            )
          } ${formType}`}>
            <TodoCheckbox checked={complete} />
          </div>
          <div className={`todo-description-input ${formType}`}>
            <input 
              type="text" 
              placeholder="Describe this to-do..." 
              value={description}
              onChange={this.handleChange("description")} 
            />
          </div>
        </div>
        <div className={`todo-notes-input ${formType}`}>
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
        {canEdit ? null : (
          <div className={`submit-todo-container ${formType}`}>
            <input type="submit" value={formType === "new-todo" ? (
              "Add this to-do"
              ) : (
                "Save changes"
              )} 
            />
            <button onClick={toggleForm}>Cancel</button>
              {formType === "new-todo" ? null : (
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