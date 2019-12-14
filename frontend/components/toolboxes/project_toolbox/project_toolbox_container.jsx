import React from 'react';
import { connect } from 'react-redux';
import Toolbox from "../toolbox";
import ProjectToolboxBody from "./project_toolbox_body";
import { fetchProject, createProject } from '../../../actions/project_actions';



const HeaderLeft = () => {
  return (
    <h2>HeaderLeft</h2>
  )
}
const HeaderCenter = () => {
  return (
    <h1>HeaderCenter</h1>
  )
}
const HeaderRight = () => {
  return (
    <h2>HeaderRight</h2>
  )
}


const msp = (state, ownprops) => ({
  NavBar: null,
  HeaderLeft: HeaderLeft,
  HeaderCenter: HeaderCenter,
  HeaderRight: HeaderRight,
  Body: ProjectToolboxBody
})

// const mdp = dispatch => (
//   null
// )

export default connect(msp, null)(Toolbox);