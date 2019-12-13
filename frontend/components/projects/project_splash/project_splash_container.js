import { connect } from 'react-router-dom';
import ProjectSplashContainer from "./project_splash";
import { fetchProject } from "../../../util/project_api_util";

const msp = (state, ownProps) => ({
  name: state.entities.projects[ownProps.match.]
})

// const mdp 
