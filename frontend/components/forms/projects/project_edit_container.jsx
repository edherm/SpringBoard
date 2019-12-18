// getting the error that ownProps is undefined on line 37

import React from "react";
import { connect } from "react-redux";
import ProjectForm from './project_form';
import { updateProject, fetchProject, deleteProject } from '../../../actions/project_actions';
import {withRouter} from 'react-router-dom';

class Toolbox extends React.Component {
  constructor(props) {
    super(props)
  } 

  

  render () {
    const { projectAction, errors, formType, project, deleteProject } = this.props;

    if (!project) return null;

    return (
      <div className="toolbox-body">
        <ProjectForm 
          history={this.props.history} 
          match={this.props.match} 
          errors={errors}
          project={project} 
          formType={formType} 
          projectAction={projectAction} 
          deleteProject={deleteProject}
        />
      </div>
    )

  }
}



const msp = (state, ownProps) => {
  return {
    project: state.entities.projects[ownProps.match.params.projectId],
    formType: "projectEdit",
    errors: Object.values(state.errors)
  }
}

const mdp = dispatch => ({
  projectAction: project => dispatch(updateProject(project)),
  fetchProject: projectId => dispatch(fetchProject(projectId)),
  deleteProject: projectId => dispatch(deleteProject(projectId))
})

export default withRouter(connect(msp, mdp)(Toolbox));