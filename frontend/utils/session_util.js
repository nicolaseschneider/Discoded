export const signUp = (user) =>{
    return $.ajax({
        method: "POST",
        url: "/api/users",
        data: {user}
    });
};

export const login = (user) =>{
    return $.ajax({
        method: "POST",
        url: "/api/session",
        data: { user }
    });
};

export const logout = () => (
    $.ajax({
        url:'/api/session',
        method: 'DELETE'
    })
);