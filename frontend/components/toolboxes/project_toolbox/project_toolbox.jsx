import React from "react";
import {Link} from "react-router-dom";

class ProjectToolbox extends React.Component {
  constructor (props) {
    super(props)
  }
  
  componentDidMount () {
    this.props.fetchProject(this.props.match.params.projectId)
  }
  
  render () {
    const {project} = this.props
    return (
      <div className="toolbox-container">
        <div className="toolbox-edit-link">
          <Link className="toolbox-project-edit-link" 
            to={`/${this.props.match.params.userId}/projects/${this.props.match.params.projectId}/edit`}>
            ...
          </Link>
        </div>
        <div className="toolbox-main">
          <div className="toolbox-header">
            <div className="toolbox-header-left">
              
            </div>
            <div className="toolbox-header-center">
              <h1>{project.name}</h1>
              <h3>{project.description}</h3>
            </div>
            <div className="toolbox-header-right">
            
            </div>
          </div>
          <div className="toolbox-body">
            <div>
              <ul>
                <li className="toolbox-container">
                  <h1 className="toolbox-container-header" >Message Board</h1>
                  <div className="toolbox-container-body" >Messages</div>
                </li>
                <li className="toolbox-container">
                  <h1 className="toolbox-container-header" >To-dos</h1>
                  <div className="toolbox-container-body" >To-do items</div>
                </li>
                <li className="toolbox-container">
                  <h1 className="toolbox-container-header" >Schedule</h1>
                  <div className="toolbox-container-body" >Schedule items</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectToolbox;