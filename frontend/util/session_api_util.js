export const signup = ({ email, name, password }) => (
  $.ajax({
    url: `/api/users`,
    method: "POST",
    data: { user: { email, name, password } }
  })
)

export const login = ({ email, password }) => (
  $.ajax({
    url: `/api/sessions`,
    method: "POST",
    data: { user: { email, password } }
  })
)

export const logout = () => (
  $.ajax({
    url: `/api/sessions`,
    method: "DELETE"
  })
)
