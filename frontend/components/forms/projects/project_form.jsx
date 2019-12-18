import React from 'react';
import {Link} from 'react-router-dom';


class ProjectForm extends React.Component {
  constructor (props) {
    super(props);
    // debugger
    this.state = this.props.project;

    this.nameField = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.fetchProject) {
      this.props.fetchProject(this.props.match.params.projectId)
    }
  }
  
  componentDidUpdate () {
    // debugger
    if (this.props.errors.projects) {
      this.nameField.current.focus();
    }
  }
  
  handleSubmit (e) {
    e.preventDefault();
    // debugger
    const project = Object.assign({}, this.state);
    const that = this;
    // debugger
    this.props.projectAction(project).then(
      (payload) => {
        that.props;
        // debugger
        that.props.history.push(`/${that.props.match.params.userId}/projects/${payload.project.id}/`)
      })
  }

  handleInput (field) {
    return e => this.setState({ [field]: e.target.value })
  }

  render () {
    // if (!this.props.project) {
    //   return null;
    // }
    
    const { formType, project } = this.props;
    const { name, description } = this.state;
    
    let formLogo;
    let nameInput;
    let descriptionInput;
    let submitButton;

    if (formType === "projectCreate") { 
      formLogo = (<img className="create-project-img" src={window.springBoardLitURL} alt="SpringBoard Logo" />);
      nameInput = "Name this project";
      descriptionInput = "Add an optional description";
      submitButton = "Create this project"
    } else {
      formLogo = (<> </>);
      nameInput = "Name";
      descriptionInput = "Description (optional)";
      submitButton = "Save changes";
    }
    // debugger
    return (
      <div className="toolbox-container">
        {formType === "projectCreate" ? (
          null
        ) : (
          <div className="toolbox-nav">
            <i className="fas fa-th-large"></i>
            <Link to={`/${this.props.match.params.userId}/projects/${project.id}`}>{project.name}</Link>
          </div>
        )}
        <div className="toolbox-main">
        <div className={formType === "projectCreate" ? "project-form-header" : "toolbox-header project-edit"}>
            {formType === "projectCreate" ? (
              <div className="create-project-img-container">{formLogo}</div>
              ) : (
              <div className="toolbox-header-left"></div>
            )}
          <h1 className={formType === "projectCreate" ? "projectCreate-header" : "project-edit-header-center"}>
            {formType === "projectCreate" ? (
              "All right, let's get your project started!"
            ) : (
              "Edit details for this project"
            )}
          </h1>
            {formType === "projectCreate" ? (
              null
            ) : (
                <div className="toolbox-header-right"></div>
              )}
        </div>
        <form className={`project-input-container ${formType}`} onSubmit={this.handleSubmit}>
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
          <div className={`project-submit-button-container ${formType}`}>
            <input className={`project-submit-button ${formType}`} type="submit" value={submitButton}/>
          </div>
        </form>
        </div>
      </div>
    )
  }
}

export default ProjectForm;