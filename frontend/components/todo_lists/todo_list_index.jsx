import React from "react";
import {Link} from "react-router-dom";
import TodoList from "./todo_list";

class TodoListIndex extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      newListForm: "hidden",
      newTodoList: {
        name: "",
        details: ""
      }
    }

    this.revealForm = this.revealForm.bind(this)
    this.hideForm = this.hideForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    this.props.fetchTodoLists(this.props.match.params.projectId);
    this.props.fetchProject(this.props.match.params.projectId);
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.createTodoList(this.props.match.params.projectId, this.state.newTodoList)
      .then( ({ todoList }) => {
        // this.props.history.push(`./todoLists/${todoList.id}`)
        this.hideForm();
      }
      )
  }

  handleInput (field) {
    return e => {
      let newTodoList = Object.assign({}, this.state.newTodoList, { [field]: e.target.value })
      this.setState({ newTodoList: newTodoList})}
  }

  revealForm () {
    this.setState({newListForm: "revealed"})
  }

  hideForm (e) {
    if (e) {
      e.preventDefault();
    }
    this.setState({newListForm: "hidden"})
  }
  
  render () {
    const { todoLists, project } = this.props;
    const { projectId, userId } = this.props.match.params;
    const { name, details } = this.state.newTodoList;
    
    return (
      <div className="toolbox-container  todo-list-index">
        { !project ? null : (
          <div className="toolbox-nav">
            <i className="fas fa-th-large"></i>
            <Link to={`/${userId}/projects/${projectId}`}>{project.name}</Link>
          </div>
        )}
        <div className="toolbox-main todo-list-index">
          <div className="toolbox-header-bordered todo-list-index">
            <div className="toolbox-header-left todo-list-index">
              <div onClick={this.revealForm} className="todos-index-new-list">
                <div>
                  <span className="new-list-plus">+</span>
                  <label className="new-list-label" >New List</label>
                </div>
              </div>
            </div>
            <div className="toolbox-header-center todo-list-index">
              <h1>To-dos</h1>
              <h4>0/15</h4>
            </div>
            <div className="toolbox-header-right todo-list-index">
            </div>
          </div>
          <div className="toolbox-body todo-list-index">
            <div className={`expanding-form ${this.state.newListForm}`}>
              <div className="expanding-form-container">
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
                      <input type="submit" value="Add this list"/>
                    </div>
                    <button onClick={this.hideForm}>Cancel</button>
                  </div>
                </form>
              </div>
            </div>
            <ul className="todo-lists-ul">
              {todoLists.map( todoList => 
                <li className="todo-lists-li">
                  <TodoList todoList={todoList} page="index" key={todoList.id} />
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoListIndex;