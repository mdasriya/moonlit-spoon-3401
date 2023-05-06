import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AboutUs from './AboutUs'
import Blog from './Blog'
import Classes from './Classes'
import Coaches from './Coaches'
import Home from './Home'
import SingleProducts from './SingleProducts'
import Product from './Product'

const mainRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/classes' element={<Classes/>}></Route>
        <Route path='/coaches' element={<Coaches/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/about-us' element={<AboutUs/>}></Route>
        <Route path='/products' element={<Product/>}></Route>
        <Route path='/products/:id' element={<SingleProducts/>}></Route>
      </Routes>
    </div>
  )
}

export default mainRoutes