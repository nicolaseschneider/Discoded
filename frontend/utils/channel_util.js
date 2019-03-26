export const fetchChannel = (id) => {
    return $.ajax({
        url: `/api/channels/${id}`,
    })
};

export const fetchChannels = () => {
    return $.ajax({
        url: `/api/channels`
    })
};

export const createChannel = (channel) => {
    return $.ajax({
        method: "POST",
        url: "/api/channels",
        data: { channel }
    })
};

export const deleteChannel = (id) => (
    $.ajax({
        url: '/api/channel/',
        method: 'DELETE'
    })
);  