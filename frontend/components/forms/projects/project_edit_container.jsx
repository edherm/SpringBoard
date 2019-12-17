// getting the error that ownProps is undefined on line 37

import React from "react";
import { connect } from "react-redux";
import ProjectForm from './project_form';
import { updateProject, fetchProject } from '../../../actions/project_actions';
import {withRouter} from 'react-router-dom';

class Toolbox extends React.Component {
  constructor(props) {
    super(props)
  } 

  

  render () {
    const { projectAction, errors, formType, project } = this.props;
    // debugger

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
        />
      </div>
    )

  }
}



const msp = (state, ownProps) => {
  // debugger
  return {
    project: state.entities.projects[ownProps.match.params.projectId],
    errors: Object.values(state.errors)
  }
}

const mdp = dispatch => ({
  projectAction: project => dispatch(updateProject(project)),
  fetchProject: projectId => dispatch(fetchProject(projectId))
})

export default withRouter(connect(msp, mdp)(Toolbox));