import React from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllProductsAdminSide} from "../Redux-Admin/action";
import NavAdmin from '../components/NavAdmin';
import AdminProdCard from '../components/AdminProdCard';
import styled from 'styled-components';
import EditProd from '../components/EditProd';


const AllProducts = () => {
 
 const dispatch= useDispatch();
 const products= useSelector((store)=>store.AdminProductReducer.products)

 console.log(products);

    useEffect(()=>{
       dispatch(getAllProductsAdminSide());
    },[])

    

    return (
    
    <div>
        <NavAdmin/>

        <DIV>
        {products.length >0 && products.map((item)=>{
        return ( <div>
             <AdminProdCard key={item.id} {...item}/>
                
                 
        </div>
        )
        })}
        </DIV>
   
    </div>
  )
}

export default AllProducts


const DIV = styled.div`
    border : 0px solid grey;
    display: grid;
    align-items: center;
    justify-content: center;
    margin: auto;
    grid-template-columns: repeat(4,1fr);
    gap:20px;
`