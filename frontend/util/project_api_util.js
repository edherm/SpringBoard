export const fetchProjects = userId => (
  $.ajax({
    url: "/api/projects",
    data: {userId}
  })
)