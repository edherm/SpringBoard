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

  componentDidMount () {
    this.props.fetchProject(this.props.match.params.projectId)
  }

  render () {
    const { toolbox, projectAction, errors, formType, project } = this.props;
    const { NavBar, HeaderLeft, HeaderCenter, HeaderRight, Body } = toolbox;
    // debugger

    if (!project) return null;

    return (
      <div className="toolbox-container">
        {NavBar ? <div className="toolbox-nav"><NavBar /></div> : null}
        <div className="toolbox-main">
          <div className="toolbox-header">
            <div className="toolbox-header-left">
              { HeaderLeft ? <HeaderLeft /> : null }
            </div>
            <div className="toolbox-header-center">
              { HeaderCenter ? <HeaderCenter /> : null }
            </div>
            <div className="toolbox-header-right">
              { HeaderRight ? <HeaderRight /> : null }
            </div>
          </div>
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
        </div>
      </div>
    )

  }
}



const msp = (state, ownProps) => {
  // debugger
  return {
    project: state.entities.projects[ownProps.match.params.projectId],
    errors: Object.values(state.errors),
    toolbox: {
      NavBar: null,
      HeaderLeft: null,
      HeaderCenter: () => (<h1>Edit details for this project</h1>),
      HeaderRight: null
    }
  }
}

const mdp = dispatch => ({
  projectAction: project => dispatch(updateProject(project)),
  fetchProject: projectId => dispatch(fetchProject(projectId))
})

export default withRouter(connect(msp, mdp)(Toolbox));