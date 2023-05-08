import React, { useState } from 'react'
import NavAdmin from '../components/NavAdmin'
import { getUsers } from '../Redux-Admin/action'
import { useEffect } from 'react'
import UserCard from '../components/UserCard'
import styled from 'styled-components'


const Users = () => {
  const [users, setUsers]=useState([]);
  

    useEffect(()=>{
         getUsers().then((data)=>setUsers(data));   
    },[])

    console.log(users);

    return (
    <div>
        <NavAdmin/>
        <DIV>
            {users?.length>0 && users?.map((item)=>{
                return <UserCard key={item.id} {...item}/>
            })}
        </DIV>
    </div>
  )
}

export default Users

const DIV = styled.div`
    display: grid;
    margin: auto;
    grid-template-columns: repeat(3,1fr);
    justify-content: center;
    align-items: center;
    gap:20px;
    margin-top: 20px;
`