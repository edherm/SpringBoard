import * as projectAPIUtil from "../util/project_api_util";

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';

export const receiveProjects = (projects) => ({
  type: RECEIVE_PROJECTS,
  projects
})

export const fetchProjects = userId => dispatch => (
  projectAPIUtil.fetchProjects(userId)
    .then(projects => dispatch(receiveProjects(projects)))
)