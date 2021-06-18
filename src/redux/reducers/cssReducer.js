export const cssReducer = (state = {width: 10, direction: "top"}, action) => {
    switch (action.type) {
        case "SET_WIDTH":
            return state = {width: action.width, direction: state.direction}
        case "SET_DIRECTION":
            return state = {width: state.width, direction: action.direction}
        case "GET_CSS":
            return state
        default:
            return state
    }
}