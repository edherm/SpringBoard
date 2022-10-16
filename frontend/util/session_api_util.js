import fetchAPI from "./fetch_api";

export const signup = (user) => {
  return fetchAPI('api/users',{
    method: 'POST',
    body: JSON.stringify({ user }),
  });
};

export const login = (user) =>
  fetchAPI('api/sessions', {
    method: 'POST',
    body: JSON.stringify({ user }),
  });

export const logout = () =>
  fetchAPI('api/sessions', {
    method: 'DELETE',
  });
