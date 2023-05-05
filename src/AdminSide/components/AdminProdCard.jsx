import React from 'react'
import styled from 'styled-components'


const AdminProdCard = ({...item}) => {
   
    const {id,image,name,price,offer, price_cut}  = item 
  
  
    const handleEdit=()=>{
        console.log("edit");
    }

    const handleDelete=()=>{
        console.log("delete");
    }


    return (
    <DIV>
        <img id='imgg' src={image} alt='image_prod'/>
        <h4>{name}</h4>
        <h4>Price : ₹{price}/-</h4>
        <h4>Price Cut :  ₹{price_cut}/-</h4>
        <h4>Offer : {offer}</h4>
        <button onClick={handleEdit} className='crud-e'>Edit</button>
        <button onClick={handleDelete} className='crud-d'>Delete</button>
    </DIV>
  )
}

export default AdminProdCard 


const DIV = styled.div`
    /* border:1px solid grey; */
    /* background-color: #f1f1ee; */
    width: 350px;
    height: 420px;
    margin: auto;
    gap: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    :hover{
        border: 1px solid black;
        background-color: floralwhite;
    }
    #imgg{
          margin: auto;
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
        border: 1px solid black;
        background-color: #f03d3d;
        color:white;
        width: 30%;
        height: 6%;
    }
`