import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {github} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import {Button} from "react-bootstrap";
import {useSelector} from "react-redux";
function copy(text){
    let copyInput = document.createElement("textarea");
    document.body.appendChild(copyInput);
    copyInput.value = text;
    copyInput.select();
    document.execCommand("copy");
    document.body.removeChild(copyInput);
}
export default function DisplayCSS(props) {
    const width = useSelector(store => store.triangleCSS.width)
    const direction = useSelector(store => store.triangleCSS.direction)
    const color = useSelector(store => store.color)
    let css = ""
    if (direction === "top") {
        css =`width: 0;\nborder-left: ${width}px solid transparent;\nborder-right: ${width}px solid transparent;\nborder-bottom: ${width}px solid ${color};`
    } else if (direction === "bottom") {
        css =`width: 0;\nborder-left: ${width}px solid transparent;\nborder-right: ${width}px solid transparent;\nborder-top: ${width}px solid ${color};`
    } else if (direction === "left") {
        css = `width: 0;\nborder-bottom: ${width}px solid transparent;\nborder-right: ${width}px solid ${color};\nborder-top: ${width}px solid transparent;`
    } else if (direction === "right") {
        css =`width: 0;\nborder-bottom: ${width}px solid transparent;\nborder-left: ${width}px solid ${color};\nborder-top: ${width}px solid transparent;`

        }
    return (
        <>
            <SyntaxHighlighter className="w-100" language="CSS" style={github}>
                {css}
            </SyntaxHighlighter>
            <Button className="w-100" onClick={() => copy(css)}> Copy </Button>
        </>


    )
}