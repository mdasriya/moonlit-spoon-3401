import { Box,Image,Button } from '@chakra-ui/react'
import React from 'react'
// import { Link } from 'react-scroll';
import { HashLink as Link } from 'react-router-hash-link'
const Navbar = () => {
  return (
    <Box style={{display:"flex",justifyContent:"space-around",width:"100%",alignItems:"center",textDecoration:"none",marginTop:"20px"}}>
      <Box style={{width:"10%"}}>
        <Image src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/wzhws0lryys88fh4jk0t' width="100px">
        </Image>
      </Box>
      <div style={{width:"40%",justifyContent:"space-around",display:"flex",color:"#F1F4FC"}}>

        <Link to="/#classes" smooth>CLASSES</Link>
        <Link to="/#coaches" smooth>COACHES</Link>
        {/* <Link to="/blog">BLOG</Link> */}
        <Link to="/#about-us" smooth>ABOUT US</Link>

      </div>
      <Box style={{width:"15%",justifyContent:"space-between",display:"flex"}}>
        <Link>
        <Button borderRadius="2px" backgroundColor="#2FD0DA" border="none" padding="5px" color="#06181C" fontWeight="bold">SHOP</Button>
        </Link>
        <Link>
        <Button borderRadius="2px" backgroundColor="#2FD0DA" border="none" padding="5px" color="#06181C" fontWeight="bold">BECOME A MEMBER</Button>
        </Link>
      </Box>
    </Box>
  )
}

export default Navbar