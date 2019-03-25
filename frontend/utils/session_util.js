



export const signUp = (user) =>{
    return $.ajax({
        method: "POST",
        url: "/api/users",
        data: user
    })
}

export const createSession = (user) =>{
    return $.ajax({
        method: "POST",
        url: "/api/session",
        data: user
    })
}

export const logout