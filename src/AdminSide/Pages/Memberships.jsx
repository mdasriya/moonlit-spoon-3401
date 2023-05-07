import React from 'react'
import NavAdmin from '../components/NavAdmin'
import { getMemberships } from '../Redux-Admin/action'
import { useEffect,useState } from 'react'
import MemberCard from '../components/MemberCard'
import styled from 'styled-components'

const Memberships = () => {
 const [member,setMember]= useState([]);

 //no redux as it will become double 
 
 useEffect(()=>{
        getMemberships().then((data)=>setMember(data));
 },[])

 console.log(member);


    return (
   
    <div>
         <NavAdmin/>
       <DIV>

       {member.length>0 && member.map((item)=>{
            return  <MemberCard key={item.id} {...item}/>   
         })}
       </DIV>
        
    </div>
  )
}

export default Memberships



let DIV = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    margin-top: 10px;
    gap: 20px;
    
`