import { Box, Image, Button, position } from '@chakra-ui/react'
import React from 'react'

import { HashLink as Link } from 'react-router-hash-link'
const Navbar = () => {
  const myStyle ={
    color:"#F1F4FC",
    textDecoration:"none"
  }
  return (
    <Box style={{ display: "flex", justifyContent: "space-around", width: "100%", alignItems: "center", textDecoration: "none",top:"0", position:'fixed',backgroundColor:"#06181C"}}>
      <Box style={{ width: "10%" }}>
        <Link to="/#" smooth>
          <Image src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/wzhws0lryys88fh4jk0t' width="100px">
          </Image>
        </Link>

      </Box>
      <div style={{ width: "40%", justifyContent: "space-around", display: "flex"}}>

       
        <Link style={myStyle} to="/#coaches" smooth>COACHES</Link>
        <Link style={myStyle} to="/blog">BLOG</Link>
        <Link style={myStyle} to="/#about-us" smooth>ABOUT US</Link>
        <Link style={myStyle} to="/#contact-us" smooth>CONTACT US</Link>

      </div>
      <Box style={{ width: "15%", justifyContent: "space-between", display: "flex" }}>
        <Link>
          <Button cursor="pointer" borderRadius="2px" backgroundColor="#2FD0DA" border="none" padding="5px" color="#06181C" fontWeight="bold">SHOP</Button>
        </Link>
        <Link to="/member">
          <Button cursor="pointer" borderRadius="2px" backgroundColor="#2FD0DA" border="none" padding="5px" color="#06181C" fontWeight="bold">BECOME A MEMBER</Button>
        </Link>
      </Box>
    </Box>
  )
}

export default Navbar