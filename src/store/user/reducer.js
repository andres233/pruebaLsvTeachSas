const initialState = {
    user: {},
};

export default (state = initialState, action) => {
    if (action.type === "CHANGE_USER") {
        console.log('reducers' + action.payload);
        return {
            ...state,
            user: action.payload
        }
    }

    return state;
}

export const getUser = state => state.userReducer.user;