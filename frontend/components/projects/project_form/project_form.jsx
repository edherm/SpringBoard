import React from 'react';

class ProjectForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = this.props.project;

    this.nameField = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate () {
    debugger
    if (this.props.errors) {
      this.nameField.current.focus();
    }
  }
  
  handleSubmit (e) {
    e.preventDefault();
    // debugger
    const project = Object.assign({}, this.state);

    this.props.projectAction(project).then(
      (payload) => {
        this.props.history.push(`./${payload.project.id}/`)
      })
  }

  handleInput (field) {
    return e => this.setState({ [field]: e.target.value })
  }

  render () {
    const { formType } = this.props;
    const { name, description } = this.state;
    
    let formLogo;
    let nameInput;
    let descriptionInput;
    let submitButton;

    if (formType === "projectCreate") { 
      formLogo = (<img className="create-project-img" src={window.springURL} alt="SpringBoard Logo" />);
      nameInput = "Name this project";
      descriptionInput = "Add an optional description";
      submitButton = "Create this project"
    } else {
      formLogo = (<> </>);
      nameInput = "Name";
      descriptionInput = "Description (optional)";
      submitButton = "Save changes";
    }

    return (
      <div className="project-form-container">
        <div className="project-form-header">
          {formLogo}
          <h1 className={`${formType}-header`}>
            {formType === "projectCreate" ? (
              "All right, let's get your project started!"
            ) : (
              "Edit details for this project"
            )}
          </h1>
        </div>
        <form className="project-input-container" onSubmit={this.handleSubmit}>
          <h3><label>{nameInput}</label></h3>
          <input 
            ref={this.nameField}
            type="text" 
            placeholder="e.g Office Renovation" 
            value={name} 
            onChange={this.handleInput("name")} 
          />
          <h3><label>{descriptionInput}</label></h3>
          <textarea

            placeholder="e.g Plans and scheduling for expanding the office"
            value={description}
            onChange={this.handleInput("description")}
          />
          <input className="project-submit-button" type="submit" value={submitButton}/>
        </form>

      </div>
    )
  }
}

export default ProjectForm;