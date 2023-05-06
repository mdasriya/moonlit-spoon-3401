import axios from "axios"
import { POSTPRODUCTFAILURE, POSTPRODUCTREQUEST, POSTPRODUCTSUCCESS } from "./actionType"

export const postMembership = (data)=>(dispatch)=>{
    dispatch({type:POSTPRODUCTREQUEST})
    axios.post(`https://powerful-blue-smock.cyclic.app/member`,data).then((res)=>{
        
        dispatch({type:POSTPRODUCTSUCCESS})
        
    }).catch((err)=>{
        dispatch({type:POSTPRODUCTFAILURE})
    })
}