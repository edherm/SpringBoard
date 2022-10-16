import fetchAPI from "./fetch_api";

export const fetchProjects = (userId) =>
  fetchAPI(`/api/projects?userId=${userId}`, {
  });

export const fetchProject = (projectId) =>
  fetchAPI(`/api/projects/${projectId}`);

export const createProject = (project) => {
  return fetchAPI(`api/projects`, {
    method: 'POST',
    body: JSON.stringify({ project }),
  });
};

export const updateProject = (project) => {
  return fetchAPI(`api/projects/${project.id}`, {
    method: 'PATCH',
    body: JSON.stringify({ project }),
  });
};

export const deleteProject = (projectId) => {
  return fetchAPI(`/api/projects/${projectId}`, {
    method: 'DELETE',
  });
};

export const filterByProject = (slice, projectId) => {
  return slice.filter((el) => el.project_id === parseInt(projectId));
};
