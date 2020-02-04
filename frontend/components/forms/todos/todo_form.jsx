import React from "react";

class TodoForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      todo: this.props.todo
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }  

  handleChange (field) {
    return e => this.setState(({ [field]: e.target.value }))
  }

  handleSubmit (e) {
    e.preventDefault();
    const { projectId, todoListId } = this.props;

    // const todo = Object.assign({}, this.state);
    this.props.formAction(projectId, todoListId, this.state).then(
      () => this.props.hideForm()
    )
  }

  render () {
    const { description, notes } = this.state;

    return (
      <form className={`${this.props.formType}-form`} onSubmit={this.handleSubmit}>
        <div className={`todo-description-row ${this.props.formType}`}>
          <div className={`todo-checkbox ${false} ${this.props.formType}`}>
            <i className="far fa-square"></i>
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
        <div className="submit-todo-container">
          <input type="submit" value="Add this to-do" />
          <button onClick={this.props.hideForm}>Cancel</button>
        </div>
      </form>
    )
  }

}

export default TodoForm;