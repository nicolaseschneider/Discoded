export const getUser = (id) => {
  return $.ajax({
    url: `/api/users/${id}`,
  });
};
