import * as types from "./actiontype";
import axios from "axios";

let url = `https://powerful-blue-smock.cyclic.app/gym_products`;


export const getAllAdminProdReq = ()=>{
    return {
        type: types.GET_ALL_ADMIN_PROD_REQ
    }
}

export const getAllAdminProdSucc =(payload)=>{
    return {
        type: types.GET_ALL_ADMIN_PROD_SUCC,
        payload 
    }
}

export const getAllAdminProdErr =()=>{
    return {
        type: types.GET_ALL_ADMIN_PROD_ERR,
    }
}



// Function to get All Products in admin dashboard 

export const getAllProductsAdminSide = ()=>async(dispatch)=>{
    dispatch(getAllAdminProdReq())
    try {
        let res= await axios.get(url);
        let data = res.data 
        dispatch(getAllAdminProdSucc(data));
        console.log(data);
    } catch (error) {
        console.log(error);
        dispatch(getAllAdminProdErr());
    }
}


//function to add products to database 

export const addProductFromAdmin =(payload)=>async(dispatch)=>{
    try {
        let res= await axios.post(url,payload)
        let data= res.data 
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

//edit products 

// export const handleEdit = ()=>{
//     return 1 
// }



//handle delete 

export const handleDelete =async(id)=>{
    try {
        let res= await axios.delete(`${url}/${id}`)
        console.log(res.data);
        
    } catch (error) {
        console.log(error);
    }
    window.location.reload();
}
