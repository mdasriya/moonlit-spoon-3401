


import { reducer as productReducer } from "./redux/productReducer/reducer";


import { applyMiddleware, legacy_createStore, combineReducers } from 'redux'
import {reducer as AdminProductReducer} from "./AdminSide/Redux-Admin/reducer";
import thunk from "redux-thunk";
import {reducer as MemberReducer} from "./redux/memberReducer/reducer"

const reducer = combineReducers({
    AdminProductReducer ,MemberReducer,productReducer
})


export const store= legacy_createStore(reducer, applyMiddleware(thunk))


