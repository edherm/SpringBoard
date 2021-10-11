export const fetchProjects = (userId) =>
  $.ajax({
    url: '/api/projects',
    data: { userId },
  });

export const fetchProject = (projectId) =>
  $.ajax({
    url: `/api/projects/${projectId}`,
  });

export const createProject = (project) => {
  return $.ajax({
    url: `api/projects`,
    method: 'POST',
    data: { project },
  });
};

export const updateProject = (project) => {
  return $.ajax({
    url: `api/projects/${project.id}`,
    method: 'PATCH',
    data: { project },
  });
};

export const deleteProject = (projectId) => {
  return $.ajax({
    url: `/api/projects/${projectId}`,
    method: 'DELETE',
  });
};

export const filterByProject = (slice, projectId) => {
  return slice.filter((el) => el.project_id === parseInt(projectId));
};
