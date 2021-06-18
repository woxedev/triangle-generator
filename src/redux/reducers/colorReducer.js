export const colorReducer = (state="#000000", action) => {
    switch (action.type) {
        case "SET_COLOR":
            return state = action.color
        case "GET_COLOR":
            return state
        default:
            return state
    }
}