export const fetchMessages = projectId => {
  return $.ajax({
    url: `api/projects/${projectId}/messages`
  })
}

export const fetchMessage = (projectId, messageId) => {
  return $.ajax({
    url: `api/projects/${projectId}/messages/${messageId}`
  })
}

export const createMessage = (projectId, message) => {
  return $.ajax({
    url: `api/projects/${projectId}/messages`,
    method: "POST",
    data: { message }
  })
}

export const updateMessage = (projectId, message) => {
  return $.ajax({
    url: `/api/projects/${projectId}/messages/${message.id}`,
    method: "PATCH",
    data: { message }
  })
}

export const deleteMessage = (projectId, messageId) => {
  return $.ajax({
    url: `/api/projects/${projectId}/messages/${messageId}`,
    method: "DELETE"
  });
}