import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, Image, Button, MenuButton, MenuList, MenuItem, Menu, IconButton } from '@chakra-ui/react'
import React from 'react'

import { HashLink as Link } from 'react-router-hash-link'
const Navbar = () => {
  const myStyle ={
    color:"#F1F4FC",
    textDecoration:"none"
  }
  return (
    
    <Box height={{
      base: '15%',
      sm:"15%", // 0-48em
      md: '14%', // 48em-80em,
      xl: '13%', // 80em+
    }} style={{padding:"10px 0px 10px 0px", position:"fixed",zIndex:"100", display: "flex", justifyContent: "space-around", width: "100%", alignItems: "center", textDecoration: "none",top:"0",backgroundColor:"#06181C"}}>
      <Box width="60px" display={{sm:"block",md:"none",xl:"none",base:"block"}}>
      <Menu>
  <MenuButton as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline' color="#2FB0DA">Open menu</MenuButton>
  <MenuList bgColor="#06181C">
    <MenuItem bgColor="#06181C" color="#E1F4F6" as='a' href='#coaches'>COACHES</MenuItem>
    <MenuItem bgColor="#06181C" color="#E1F4F6" as='a' href='blog'>BLOG</MenuItem>
    <MenuItem bgColor="#06181C" color="#E1F4F6" as='a' href='#about-us'>ABOUT US</MenuItem>
    <MenuItem bgColor="#06181C" color="#E1F4F6" as='a' href='#contact-us'>CONTACT US</MenuItem>
    <MenuItem bgColor="#06181C" color="#E1F4F6" as='a' href='products'>SHOP</MenuItem>
    <MenuItem bgColor="#06181C" color="#E1F4F6" as='a' href='member'>BECOME A MEMBER</MenuItem>
  </MenuList>
</Menu>
      </Box>
      <Box width={["40%","20%","10%","10%"]}>
        <Link to="/#" smooth>
          <Image src='https://i.ibb.co/vPM31c0/Logo.png' width="100px">
          </Image>
        </Link>

      </Box>
      <Box fontSize={{md:"18px",xl:"18px"}} display={{sm:"none",md:"flex",xl:"flex",base:"none"}} justifyContent={{md:"space-around",xl:"space-around"}} width={[
      '20%', // 0-30em
      '50%', // 30em-48em
      '55%', // 48em-62em
      '45%',
      '40%' // 62em+
    ]}  >

       
        <Link style={myStyle} to="/#coaches" smooth>COACHES</Link>
        <Link style={myStyle} to="/blog">BLOG</Link>
        <Link style={myStyle} to="/#about-us" smooth>ABOUT US</Link>
        <Link style={myStyle} to="/#contact-us" smooth>CONTACT US</Link>

      </Box>

      <Box display={{sm:"none",md:"flex",xl:"flex",base:"none"}} justifyContent="space-between"  width={[
      '60%', // 0-30em
      '45%', // 30em-48em
      '30%', // 48em-62em
      '26%', // 62em+
      '19%',
      '17%'

    ]}>
        <Link to={"/products"}>
        <Button borderRadius="2px" backgroundColor="#2FD0DA" border="none" padding="5px" color="#06181C" fontWeight="bold">SHOP</Button>

        </Link>
        <Link to="/member">
          <Button cursor="pointer" borderRadius="2px" backgroundColor="#2FD0DA" border="none" padding="5px" color="#06181C" fontWeight="bold">BECOME A MEMBER</Button>
        </Link>
      </Box>
      
      
    </Box>
  )
}

export default Navbar