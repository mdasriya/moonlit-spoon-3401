import React from "react";

import Dashboard from "../AdminSide/Pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import AllProducts from "../AdminSide/Pages/AllProducts";
import AddProducts from "../AdminSide/Pages/AddProducts";
import AboutUs from "./AboutUs";
import Blog from "./Blog";
import Classes from "./Classes";
import Coaches from "./Coaches";
import Home from "./Home";

import SingleProducts from "./SingleProducts";
import Product from "./Product";

import Member from "./Member";
import Contact from "./Contact";

import Login from "./Login";
import SignUp from "./SignUp";

import Memberships from "../AdminSide/Pages/Memberships";
import Users from "../AdminSide/Pages/Users";
import PrivateRoute from "../Components/PrivateRoute";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/allproducts" element={<AllProducts />} />
      <Route path="/addProducts" element={<AddProducts />} />
      <Route path="/" element={<Home />}></Route>
      <Route path="/memberships" element={<Memberships />} />
      <Route path="/users" element={<Users />} />

      <Route path="/classes" element={<Classes />}></Route>
      <Route path="/coaches" element={<Coaches />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/about-us" element={<AboutUs />}></Route>

      <Route path="/products" element={<Product />}></Route>
      <Route path="/products/:id" element={<SingleProducts />}></Route>

      <Route
        path="/member"
        element={
          <PrivateRoute>
            <Member />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/contact-us" element={<Contact />}></Route>
    </Routes>
  );
};

export default MainRoutes;
