import React from 'react'
import Dashboard from "../AdminSide/Pages/Dashboard";
import {Routes, Route} from "react-router-dom";
import AllProducts from "../AdminSide/Pages/AllProducts";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/allproducts" element={<AllProducts/>}/>
    </Routes>
  )
}

export default MainRoutes