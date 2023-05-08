import React, { useEffect, useState } from "react"

import {
  Drawer,
  
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Text,
  DrawerHeader,
  DrawerBody,
  Thead,
  Table,
  Tr,
  Th,
  TableContainer,
} from '@chakra-ui/react'
import styled from "styled-components"

import axios from "axios"
import { useLocation } from "react-router-dom"

const getData =  async () => {
  const res =  await axios.get("https://powerful-blue-smock.cyclic.app/cart")

  return res.data
}



 export default function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
const {location} = useLocation()
  const [data, setData] = useState([])
const [update, setUpdate] = useState(false)


const func = () => {
  setUpdate((prev)=> !prev)
}


  useEffect(() => {
    getData()
      .then((res) => {
        setData(res)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [update])

  const handleIncrement = (itemId) => {
    const updatedItems = data.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setData(updatedItems);

  };

  const handleDecrement = (itemId) => {
    const updatedItems = data.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setData(updatedItems);

    
  };

  

  const handleDelete = async (id) => {

    console.log(id);
    try {
      await axios.delete(`https://powerful-blue-smock.cyclic.app/cart/${id}`)
      setUpdate((prev)=> !prev)
      
    } catch (error) {
      func();
    }
  
  }

console.log(location);
  return (
    <div>
      <Button  zIndex={"200"} top={3} right={0} position={"fixed"}  ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Cart
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"md"}  
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Cart</DrawerHeader>

          <DrawerBody>
          <TableContainer>
            <DIV>
              <Table>

            <Thead>
      <Tr>
        <Th>item</Th>
        <Th>name</Th>
        <Th isNumeric>Price</Th>
      </Tr>
    </Thead>
              </Table>

            {
              data?.map((el)=> {
                return       <div className="contentdiv" key={el.id}>
                <div className="firstBox">
                  <img src={el.image} alt="" />
                  <div className="name">
                    <div className="div">

                  <div className="b" fontSize='sm'>{el.name}</div>
                    </div> 
                <div className="quantity">
                  <button onClick={()=>handleDecrement(el.id)}>-</button>
                  <button disabled>{el.quantity}</button>
                  <button onClick={()=>handleIncrement(el.id)}>+</button>
                </div>
                  </div>
                  <div className="price">
                <Text ml={"4px"} fontSize='md'>₹{el.price * el.quantity}</Text>
                <button className="remove" onClick={()=>handleDelete(el.id)}>Remove</button>
                  </div>
                </div>
                      </div>
              })
            }  

 </DIV>
</TableContainer>
          </DrawerBody>

        
        </DrawerContent>
      </Drawer>
      <div className="checkout">
        <div className="first"></div>
        <div className="second"></div>
      </div>
    </div>
  )
};

const DIV = styled.div`
.contentdiv{
  border: 1px solid gray;
  align-items: center;
 margin-bottom: 10px;
}
.firstBox{
  display: flex;
}
img{
  width: 20%;
  height: 30%;
}
.name{
  display: flex;
  flex-direction: column;
}
div .b{
 border: 1px solid black;
 white-space: nowrap; 
 width: 270px; 
 overflow: hidden;
 text-overflow: ellipsis; 
 border: 1px solid #000000;
}

.quantity{
  border: 1px solid gray;
  width: 30%;
  justify-content: space-between;
  height: 30px;
  margin-top: 20px;

  
}
.quantity button{
border: none;
padding: 3px 8px;
border-radius: 4px;
}
.price{
  /* border: 1px solid blue; */
  padding-left: 20px;
}
.remove{
  border: 1px solid gray;
  padding: 2px;
  border-radius: 4px;
  margin-top: 20px;
}

`