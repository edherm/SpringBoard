import fetchAPI from "./fetch_api";

export const fetchMessages = (projectId) => {
  return fetchAPI(`api/projects/${projectId}/messages`);
};

export const fetchMessage = (messageId) => {
  return fetchAPI(`api/messages/${messageId}`);
};

export const createMessage = (message) => {
  return fetchAPI(`api/messages`, {
    method: 'POST',
    body: JSON.stringify({ message }),
  });
};

export const updateMessage = (message) => {
  return fetchAPI(`/api/messages/${message.id}`, {
    method: 'PATCH',
    body: JSON.stringify({ message }),
  });
};

export const deleteMessage = (messageId) => {
  return fetchAPI(`/api/messages/${messageId}`, {
    method: 'DELETE',
  });
};

export const messagePreview = (messageBody, prevLength) => {
  let messageArr = messageBody.split('<');

  messageArr = messageArr.map((str) => {
    let editedStr = str;

    for (let i = 0; i < str.length; i++) {
      const char = str[i];

      if (char === '>') {
        editedStr = str.slice(i + 1, str.length);
        break;
      }
    }
    return editedStr;
  });

  let newBody = messageArr.join('');

  return newBody.length > prevLength
    ? `${newBody.slice(0, prevLength - 3)}...`
    : newBody;
};

export const lastUpdated = (updated_at) => {
  const d = new Date(updated_at);
  return (
    d.toString().slice(4, 7) +
    '. ' +
    d.toString().slice(7, 10) +
    ', ' +
    d.toString().slice(10, 15)
  );
};
