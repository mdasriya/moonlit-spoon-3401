import React from 'react'
import styled from 'styled-components'


const UserCard = ({name,password,email,id}) => {
  return (
   
   <DIV>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9ML0QbGwOiQvUlDh1_E4PSKmHPyTRxjuaQ&usqp=CAU' alt='imgg'/>
    <h4 id='name-user' className='user-ad'>{name}</h4>
    <p className='user-ad'>{email}</p>
    <p id="pass" className='user-ad'>{password}</p>
    </DIV>
  )
}

export default UserCard

const DIV = styled.div`
    
    margin: auto;
    border:1px solid grey;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    .user-ad{
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    #name-user{
        color: blueviolet;
    }
    #pass{
        display: none;
    }

    .user-ad:hover+#pass{
        display: block;
        color: red;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
    }
    

   
    
`