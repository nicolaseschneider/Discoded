export const getServers = () => {
  return $.ajax({
    url: `/api/servers/`,
  });
};

export const getServer = (id) => {
  return $.ajax({
    url: `/api/servers/${id}`
  });
};

export const deleteServer = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/servers/${id}`
  });
};
export const updateServer = (server) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/servers/${server.id}`,
    data: {server}
  });
};

export const createServer = (server) => {
  return $.ajax({
    method: 'POST',
    url: `/api/servers`,
    data: { server }
  });
};

export const joinServer = (invite_code) => {
  return $.ajax({
    url: `/servers/${invite_code}`
  });
};