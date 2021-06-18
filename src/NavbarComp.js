import React from 'react';
import {Navbar, Form} from "react-bootstrap";
import DisplayCSS from "./DisplayCSS";
import ColorPicker from "./ColorPicker";
import {useDispatch, useSelector} from "react-redux";
import {setWidth} from "./redux/actions";
import {setDirection} from "./redux/actions";

export default function NavbarComp(props) {
    const dispatch = useDispatch()
    const HandleChange = (e) => {
        const name = e.target.name;
        if(name === "width"){
            dispatch(setWidth(e.target.value))
        } else if (name === "direction"){
            dispatch(setDirection(e.target.value))

        }
    }
    const width = useSelector(store => store.triangleCSS.width)
    const direction = useSelector(store => store.triangleCSS.direction)
    return(
        <>
            <Navbar className="flex-column">
                <Navbar.Brand>CSS TRIANGLE GENERATOR</Navbar.Brand>
                <Form>
                    <Form.Group>
                        <Form.Label>Width:</Form.Label>
                        <Form.Control type="number" value={width} onChange={HandleChange} name="width" placeholder="Enter width" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Direction:</Form.Label>
                        <Form.Control as="select" onChange={HandleChange} value={direction} name="direction">
                            <option value="top">Top</option>
                            <option value="bottom">Bottom</option>
                            <option value="right">Right</option>
                            <option value="left">Left</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Color:</Form.Label>
                        <ColorPicker/>
                    </Form.Group>

                </Form>
                <DisplayCSS/>
            </Navbar>
        </>
    )
}