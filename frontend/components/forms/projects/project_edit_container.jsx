// getting the error that ownProps is undefined on line 37

import React from "react";
import {connect} from "react-redux";
import ProjectForm from './project_form';
import { updateProject, fetchProject } from '../../../actions/project_actions';


class ProjectEditForm extends React.Component {
  componentDidMount () {
    debugger
    this.props.fetchProject(this.props.match.params.projectId)
  }
  
  render () {
    debugger
    
    if (!project) return null;
    const {errors, project, formType, projectAction} = this.props.project;
    debugger
    return (
      <ProjectForm 
        errors={errors} 
        project={project} 
        formType={formType} 
        projectAction={projectAction} 
      />
    )
    
  }
}




const msp = (state, ownProps) => {
  debugger
  return {
  errors: Object.values(state.errors),
  project: state.entities.projects[ownProps.match.params.projectId],
  formType: "projectEdit",
  toolBox: {
    NavBar: ToolboxNav,
    HeaderLeft: HeaderLeft,
    HeaderCenter: HeaderCenter,
    HeaderRight: HeaderRight,
    Body: ProjectForm
  }
}}

const mdp = dispatch => ({
  projectAction: project => dispatch(updateProject(project)),  
  fetchProject: projectId => dispatch(fetchProject(projectId))
})

export default connect(msp, mdp)(ProjectEditForm);