import { applyMiddleware, legacy_createStore, combineReducers } from 'redux'
import {reducer as AdminProductReducer} from "./AdminSide/Redux-Admin/reducer";
import thunk from "redux-thunk";


const reducer = combineReducers({
    AdminProductReducer 
})


export const store= legacy_createStore(reducer, applyMiddleware(thunk))

