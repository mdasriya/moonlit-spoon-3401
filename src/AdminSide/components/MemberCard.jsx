import React from 'react'
import styled from "styled-components";

const MemberCard = ({email,fullname,id,planType,price}) => {
    
  
  
    return (
    <DIV className='member-card'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9ML0QbGwOiQvUlDh1_E4PSKmHPyTRxjuaQ&usqp=CAU'/>
        <h4 id='name-mem' className='ad-mem'>Name:{fullname}</h4>
        <h4 className='ad-mem'>Email:{email}</h4>
        <h4 className='ad-mem'>Plan:{planType}</h4>
        <h4 className='ad-mem'>Price:₹{price}/-</h4>
    </DIV>
  )
}

export default MemberCard

const DIV= styled.div`
    border: 1px solid indigo;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .ad-mem{
    display: flex;
    justify-content:center ;
    align-items:center;
  }
 
  #name-mem{
    color: crimson;
  }
  
`