import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AboutUs from './AboutUs'
import Blog from './Blog'
import Classes from './Classes'
import Coaches from './Coaches'
import Home from './Home'

const mainRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/classes' element={<Classes/>}></Route>
        <Route path='/coaches' element={<Coaches/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/about-us' element={<AboutUs/>}></Route>
      </Routes>
    </div>
  )
}

export default mainRoutes