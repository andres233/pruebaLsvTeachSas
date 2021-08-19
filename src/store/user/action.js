const changeuser = user => {
    console.log(user);
    return {
        type: "CHANGE_USER",
        payload: user
    }
}

export {changeuser};