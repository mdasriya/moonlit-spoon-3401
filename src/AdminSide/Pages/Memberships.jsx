import React from 'react'
import NavAdmin from '../components/NavAdmin'
import { getMemberships } from '../Redux-Admin/action'
import { useEffect,useState } from 'react'

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
         {"map here"}
    </div>
  )
}

export default Memberships
