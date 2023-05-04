import { number } from "prop-types";
import * as types from "./actiontype";

let initialState={
    isLoading:false,
    isError:false,
    products : [],
}

export const reducer =(state=initialState,action )=>{
    const {type,payload}= action 

    switch(type){
        case types.GET_ALL_ADMIN_PROD_REQ:{
            return {
                ...state,
                isLoading:true 
            }
        }
        case types.GET_ALL_ADMIN_PROD_SUCC:{
            return {
                ...state,
                isLoading:false,
                products: payload
            }
        }
        case types.GET_ALL_ADMIN_PROD_ERR:{
            return{
                ...state,
                isLoading:false,
                isError:true,
            }
        }
        
        
        default:{
            return initialState
        }
    }
}