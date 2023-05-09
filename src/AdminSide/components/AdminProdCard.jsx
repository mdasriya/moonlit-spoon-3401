import React from 'react'
import styled from 'styled-components'
import EditProd from '../components/EditProd';
import { Button } from '@chakra-ui/react';
import { handleDelete } from '../Redux-Admin/action';

const AdminProdCard = ({...item}) => {
   
    const {id,image,name,price,offer, price_cut}  = item 
  
  
    // handleDelete=(id)=>{
    //         console.log(id);
    // }
    


    return (
    <DIV key={item.id}>
        <img id='imgg' src={image} alt='image_prod'/>
        <h4 id='name' className='det' >{name}</h4>
        <h4 className='det'>Price : ₹{price}/-</h4>
        <h4 className='det'>Price Cut :  ₹{price_cut}/-</h4>
        <h4 className='det'>Offer : -{offer}%</h4>
        {/* <button onClick={()=>handleEdit(id)} className='crud-e'>Edit</button> */}
        {/* <button onClick={()=>handleDelete(id)} className='crud-d'>Delete</button> */}
        <div className='modalss'>
        <EditProd  item={item}/>
        <Button onClick={()=>handleDelete(item.id)} className='crud-d'>Delete</Button>
        </div>
        
    </DIV>
  )
}

export default AdminProdCard 


const DIV = styled.div`
    /* border:1px solid grey; */
    /* background-color: #f1f1ee; */
    width: 350px;
    height: 460px;
    margin: auto;
    gap: 5px;
    padding: 10px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    :hover{
        border: 1px solid black;
        background-color: floralwhite;
    }
    #imgg{
          margin: auto;
    }
    .det{
        margin: auto;
        display:flex;
        /* flex-direction: column; */
        align-items: center;
        justify-content: center;
    }
    
    #name{
       color: crimson;
    }

    .crud-e{
        border: 1px solid black;
        background-color: #587ae0;
        color:white;
        width: 30%;
        height: 6%;
        margin-right: 10px;
    }

    .crud-d{
        margin-left: 10px;
    }
    .modalss{
        margin: auto;
        display:flex;
        /* flex-direction: column; */
        align-items: center;
        justify-content: center;
        
    }
`