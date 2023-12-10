

export const getUsers = (params) => {
  return (client.get("api", { params }))
}