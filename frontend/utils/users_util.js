export const getUser = (id) => {
  return $.ajax({
    url: `/api/users/${id}`,
  });
};

export const getUsers = (channelId) => {
  return $.ajax({
    url: `/api/users/`,
    data: {id: channelId}
  });
}
