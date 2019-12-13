export const fetchProjects = userId => (
  $.ajax({
    url: "/api/projects",
    data: { userId }
  })
)

export const fetchProject = projectId => (
  $.ajax({
    url: `/api/projects/${projectId}`,
  })
)

export const createProject = project => {
  debugger
  return $.ajax({
    url: `api/projects`,
    method: "POST",
    data: { project }
  })
}

export const updateProject = project => (
  $.ajax({
    url: `api/projects/${project.id}`,
    method: "PATCH",
    data: { project }
  })
)

export const deleteProject = projectId => (
  $.ajax({
    url: `/api/projects/${projectId}`,
    method: "DELETE"
  })
)