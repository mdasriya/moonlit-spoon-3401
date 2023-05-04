import React from "react";
import styled from "styled-components";
import {Link } from "react-router-dom";


const NavAdmin = () => {
  return (
    <DIV>

        <Link to={"/dashboard"}>
        <h4>Reports</h4>
        </Link>
        
        
        <Link to={"/allproducts"}>
        <h4>All Products</h4>
        </Link>
        
        
        
        <h4>Add Products</h4>
        <h4>Memberships</h4>
        <h4>Users</h4>
    </DIV>
  )
}

export default NavAdmin


const DIV = styled.div`
    border : 1px solid black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px ;
    
`