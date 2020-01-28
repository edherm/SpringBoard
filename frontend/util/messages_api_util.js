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

export const messagePreview = messageBody => {
  let messageArr = messageBody.split("<");
  
  messageArr = messageArr.map(str => {
    let editedStr = str;

    for (let i = 0; i < str.length; i++) {
      const char = str[i];

      if (char === ">") {
        editedStr = str.slice(i + 1, str.length);
        break;
      }
    }
    return editedStr
  })
  
  let newBody = messageArr.join("");

  return newBody.length > 150 ? (
    `${newBody.slice(0, 147)}...`
  ) : ( 
    newBody 
  )
}

export const lastUpdated = updated_at => {
  const d = new Date(updated_at);
  return (
    d.toString().slice(4, 7) +
    ". " +
    d.toString().slice(7, 10) +
    ", " +
    d.toString().slice(10, 15)
  );
};