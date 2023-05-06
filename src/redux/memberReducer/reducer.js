import { POSTPRODUCTFAILURE, POSTPRODUCTREQUEST, POSTPRODUCTSUCCESS } from "./actionType";

const initialState = {
    iLoading : false,
    isError : false,
}
export const reducer = (state=initialState,{type})=>{

    switch (type) {
        case POSTPRODUCTREQUEST :{
            return {...state,iLoading : true,isError : false,}
        }
        case POSTPRODUCTSUCCESS :{
            return {...state,iLoading : false,isError : false}
        }
        case POSTPRODUCTFAILURE :{
            return {...state,iLoading : false,isError : true,}
        }
        default:
            return state
    }
}