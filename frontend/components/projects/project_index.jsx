import React from "react";
import { Link } from 'react-router-dom';
import ProjectIndexItem from "./project_index_item";

class ProjectIndex extends React.Component {
  
  componentDidMount () {
    this.props.fetchProjects(this.props.match.params.userId)
  }
  
  render () {
    return (
      <div className="projects-wrapper">
        <div className="projects">
          <h1 className="projects-header">Your Projects</h1>
          <ul className="projects-ul" >
            {this.props.projects.map(project =>
              <ProjectIndexItem key={project.id} 
                project={project} 
                userId={this.props.match.params.userId} 
              />
            )}
            <li className="project-index-item-li create-project-container">
              <Link className="create-project-a" to={`/${this.props.userId}/projects/create`}>
                <h1 className="project-index-item-name plus">+</h1>
                <p className="project-index-item-description plus-text" >Add a project</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}


export default ProjectIndex;