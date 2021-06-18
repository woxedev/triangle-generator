import {combineReducers} from "redux";
import {colorReducer} from "./colorReducer";
import {cssReducer} from "./cssReducer"
const reducers = combineReducers({
    color: colorReducer,
    triangleCSS: cssReducer
})

export default reducers