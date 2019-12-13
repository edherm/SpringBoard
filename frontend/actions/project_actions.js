import * as projectAPIUtil from "../util/project_api_util";

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';

export const receiveProjects = (projects) => ({
  type: RECEIVE_PROJECTS,
  projects
})

export const receiveProject = project => {
  debugger
  return {
  type: RECEIVE_PROJECT,
  project
}}

export const removeProject = projectId => ({
  type: REMOVE_PROJECT,
  projectId
})

export const receiveProjectErrors = errors => ({
  type: RECEIVE_PROJECT_ERRORS,
  errors
})

export const fetchProjects = userId => dispatch => (
  projectAPIUtil.fetchProjects(userId)
    .then(projects => dispatch(receiveProjects(projects)))
)

export const fetchProject = projectId => dispatch => (
  projectAPIUtil.fetchProject(projectId)
    .then(project => dispatch(receiveProject(project)))
)

export const createProject = project => dispatch => {
  debugger
  return projectAPIUtil.createProject(project)
    .then(project => {
      return dispatch(receiveProject(project));
      // return project;
    }, errors => (
      dispatch(receiveProjectErrors(errors.responseJSON))
    )
  )
}

export const updateProject = project => dispatch => (
  projectAPIUtil.updateProject(project)
    .then(project => {
      dispatch(receiveProject(project));
      return project
    }, errors => (
      dispatch(receiveProjectErrors(errors.responseJSON))
    )
  )
)

export const deleteProject = projectId => dispatch => (
  projectAPIUtil.deleteProject(projectId)
    .then(() => dispatch(removeProject(projectId)))
)