import React, { useState } from 'react'
import NavAdmin from '../components/NavAdmin'
import { getUsers } from '../Redux-Admin/action'
import { useEffect } from 'react'


const Users = () => {
  const [users, setUsers]=useState([]);
  

    useEffect(()=>{
         getUsers().then((data)=>setUsers(data));   
    },[])

    console.log(users);

    return (
    <div>
        <NavAdmin/>
        Users
    </div>
  )
}

export default Users
