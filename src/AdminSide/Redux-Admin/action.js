import * as types from "./actiontype";
import axios from "axios";

let url = `https://powerful-blue-smock.cyclic.app`;


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
        let res= await axios.get(`${url}/gym_products`);
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
        let res= await axios.post(`${url}/gym_products`,payload)
        let data= res.data 
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

//handle delete 

export const handleDelete =async(id)=>{
    try {
        let res= await axios.delete(`${url}/gym_products/${id}`)
        console.log(res.data);
        
    } catch (error) {
        console.log(error);
    }
    window.location.reload();
}


// /----memberships get 

export const getMemberships=async()=>{
        try {
            let res= await axios.get(`${url}/member`)
            let data= res.data
            // console.log(data);
            return data 

        } catch (error) {
            console.log(error);
        }
}

export const getUsers=async()=>{
    try {
        let res = await axios.get(`${url}/users`);
        let data= res.data
        // console.log(data);
        return data 
        
    } catch (error) {
        console.log(error);
    }
}




