export const setColor = (color) => {
    return {
        type: "SET_COLOR",
        color: color
    }
}
export const getColor = () => {
    return {
        type: "GET_COLOR",
    }
}
export const setWidth = (width) => {
    return {
        type: "SET_WIDTH",
        width: width
    }
}
export const setDirection = (direction) => {
    return {
        type: "SET_DIRECTION",
        direction: direction
    }
}
export const getTriangleCSS = () => {
    return {
        type: "GET_CSS",
    }
}