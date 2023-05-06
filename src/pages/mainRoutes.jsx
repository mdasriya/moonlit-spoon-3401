import React from 'react'

import Dashboard from "../AdminSide/Pages/Dashboard";
import {Routes, Route} from "react-router-dom";
import AllProducts from "../AdminSide/Pages/AllProducts";
import AddProducts from '../AdminSide/Pages/AddProducts';
import AboutUs from './AboutUs'
import Blog from './Blog'
import Classes from './Classes'
import Coaches from './Coaches'
import Home from './Home'
import Member from './Member';
import Contact from './Contact';


const MainRoutes = () => {
  return (

    <Routes>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/allproducts" element={<AllProducts/>}/>
      <Route path='/addProducts' element={<AddProducts/>}/>
      <Route path='/' element={<Home/>}></Route>

        <Route path='/classes' element={<Classes/>}></Route>
        <Route path='/coaches' element={<Coaches/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/about-us' element={<AboutUs/>}></Route>
        <Route path='/member' element={<Member/>}></Route>
        <Route path='/contact-us' element={<Contact/>}></Route>
      </Routes>


  )
}

export default MainRoutes