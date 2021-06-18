import React from 'react';
import {useSelector} from "react-redux";

export default function DisplayTriangle(props) {
    const width = useSelector(store => store.triangleCSS.width)
    const direction = useSelector(store => store.triangleCSS.direction)
    const color = useSelector(store => store.color)

    let css = {}
    console.log(direction)
    if (direction === "top") {
        css = {
            "width": "0",
            "borderLeft": `${width}px solid transparent`,
            "borderRight": `${width}px solid transparent`,
            "borderBottom": `${width}px solid ${color}`
        }
    } else if (direction === "bottom") {
        css = {
            "width": "0",
            "borderLeft": `${width}px solid transparent`,
            "borderRight": `${width}px solid transparent`,
            "borderTop": `${width}px solid ${color}`
        }
    } else if (direction === "left") {
        css = {
            "width": "0",
            "borderBottom": `${width}px solid transparent`,
            "borderRight": `${width}px solid ${color}`,
            "borderTop": `${width}px solid transparent`
        }
    } else if (direction === "right") {
        css = {
            "width": "0",
            "borderLeft": `${width}px solid ${color}`,
            "borderBottom": `${width}px solid transparent`,
            "borderTop": `${width}px solid transparent`
        }
    }
    return (
        <div className="triangleWrapper">
            <div className="triangle" style={css}>

            </div>
        </div>

    )
}