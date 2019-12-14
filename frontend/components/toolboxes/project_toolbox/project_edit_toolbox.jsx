import React from 'react';
import { connect } from 'react-redux';
import Toolbox from "../toolbox";
import ProjectEditContainer from "../../forms/projects/project_edit_container";
// import { fetchProject, createProject } from '../../../actions/project_actions';


const NavBar = () => {
  debugger
  return (
    <ul>
      <li><a href="">ProjectShow</a></li>
    </ul>
  )
}


const HeaderCenter = () => {
  debugger
  return (
    <h1>Edit details for this project</h1>
  )
}

const msp = (state, ownprops) => ({
  NavBar: NavBar,
  HeaderLeft: null,
  HeaderCenter: HeaderCenter,
  HeaderRight: "",
  Body: ProjectEditContainer
})

// const mdp = dispatch => (
//   null
// )

export default connect(msp, null)(Toolbox);