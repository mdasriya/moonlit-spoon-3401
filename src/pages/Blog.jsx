import React from "react";
import styled from "styled-components";
import Carousel1 from "../Components/Carousel1";
import Carousel2 from "../Components/Carousel2";
import Footer1 from "../Components/Footer1";
import Navbar from "../Components/Navbar";

const Blog = () => {
  return (
    <>
    <Navbar/>
    <DIV>
      <img
        src="https://cdn.pixabay.com/photo/2017/04/08/10/23/surfing-2212948_960_720.jpg"
        alt="surfing"
      />
      <div className="banner">
        <h4>Trending</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          laborum.
        </p>
      </div>
      <div className="meditation">
        <img src="https://wallpapercave.com/wp/wp7246274.jpg" alt="" />
        <div>
          <h2>Meditation</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            laborum.
          </p>
        </div>

        <div className="meditation">
          <img src="https://wallpapercave.com/wp/wp7246274.jpg" alt="" />
          <div>
            <h2>Meditation</h2>
            <p>
              Meditation is a structured, intractive process where an impartial
              third party assists disputing parties in resolving conflict
              through the use of specialized communication and negotiation
              techniques...
              <span> Read more </span>
            </p>
            <hr />
            <p>Mathew Glock</p>
            <p>Posted on 28 February</p>
          </div>
        </div>
        <div>
          <Carousel1 />
          <hr className="carousel" />
          <Carousel2 />
          <hr className="carousel" />
        </div>
        <Footer1 />
      </DIV>
    </>

  );
};

export default Blog;

const DIV = styled.div`
  background-color: #091315;
  color: #e1f4f6;
  margin-top: 4.7%;
  img {
    width: 100vw;
    height: 80vh;
  }
  .banner {
    position: relative;
    bottom: 150px;
    color: #e1f4f6;
    left: 100px;
  }
  h4 {
    margin-top: 5px;
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
    margin: 0;
  }
  .meditation {
    display: flex;
    width: 100%;
    margin: auto;
    justify-content: space-evenly;
  }
  .meditation img {
    width: 350px;
    height: 250px;
    border-bottom-left-radius: 60px;
    border-top-right-radius: 60px;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border: 2px solid #2fb0da;
  }
  .meditation div {
    width: 450px;
    line-height: 20px;
  }
  .meditation div span {
    color: #2fb0da;
  }
  .meditation div hr {
    margin-top: 35px;
    background: linear-gradient(to right, #2fb0da, #091315, #091315);
    height: 2px;
    border: none;
  }
  .meditation div hr ~ p {
    color: #27596a;
    font-size: 12px;
  }
  .carousel {
    margin: 100px;
    background: linear-gradient(to right, #091315, #2fb0da, #091315);
    height: 3px;
    border: none;
  }
`;
