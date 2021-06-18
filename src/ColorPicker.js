import React from 'react';
import { TwitterPicker } from 'react-color';
import {useDispatch, useSelector} from "react-redux";
import {setColor} from "./redux/actions";

export default function ColorPicker(props) {
    const color = useSelector(store => store.color)
    const dispatch = useDispatch()
    const handleChange = (color) => {
        console.log(color)
        dispatch(setColor(color.hex))
    }
    return(
        <>
            <TwitterPicker color={color} onChangeComplete={handleChange}/>
        </>
    )
}
