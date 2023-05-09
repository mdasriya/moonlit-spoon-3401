import React from "react";
import styled from "styled-components";
import {Link } from "react-router-dom";


const NavAdmin = () => {
  return (
    <DIV>

        <Link to={"/dashboard"}>
        <h4 className="names">Reports</h4>
        </Link>
        
        
        <Link to={"/allproducts"}>
        <h4 className="names">All Products</h4>
        </Link>
        
        
        <Link to={"/addProducts"}>
        <h4 className="names">Add Products</h4>
        </Link>
        
        <Link to={"/memberships"}>
        <h4 className="names">Memberships</h4>
        </Link>

      
      <Link to={"/users"}>
      <h4 className="names">Users</h4>
      </Link>
       


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
    background-color: azure;
    margin-top: 105px;
    .names {
      :hover {
        color : orange
        }
    }
     
    
    
`