import React from "react";

class TodoForm extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = this.props.todo;
    this.handleSubmit = this.handleSubmit.bind(this);
  }  

  handleChange (field) {
    return e => this.setState(({ [field]: e.target.value }))
  }

  handleSubmit (e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state)
    this.props.formAction(this.props.projectId, this.props.todoListId, todo).then(
      console.log("you added a to-do!")
    )
  }

  render () {
    const { description, notes } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className={`todo-description-input ${this.props.formType}`}>
          <input 
            type="text" 
            placeholder="Describe this to-do..." 
            value={description}
            onChange={this.handleChange("description")} 
          />
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
        <input
        type="submit" 
        />
      </form>
    )
  }

}

export default TodoForm;