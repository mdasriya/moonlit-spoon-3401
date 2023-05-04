import { Box } from "@mui/system";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carousel2 = () => {
  return (
    <Box width="80%" m="auto" mt="70px">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
          },
        }}
        // showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
        style
      >
        <div>
          <img
            src="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt=""
            style={{ width: "320px", height: "200px", borderRadius: "10px" }}
          />
          <h3>Meditation</h3>
          <p style={{ width: "330px" }}>
            Meditation is a structured, intractive process where an impartial
            third party assists disputing parties in resolving conflict through
            the use of specialized communication and negotiation techniques...
          </p>
          <hr
            style={{
              marginTop: "35px",
              background:
                "linear-gradient(to right, #2fb0da, #091315, #091315)",
              height: "2px",
              border: "none",
            }}
          />
          <p style={{ color: " #27596a", fontSize: "12px" }}>Mathew Glock</p>
          <p style={{ color: " #27596a", fontSize: "12px" }}>
            Posted on 28 February
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt=""
            style={{ width: "320px", height: "200px", borderRadius: "10px" }}
          />
          <h3>Meditation</h3>
          <p style={{ width: "330px" }}>
            Meditation is a structured, intractive process where an impartial
            third party assists disputing parties in resolving conflict through
            the use of specialized communication and negotiation techniques...
          </p>
          <hr
            style={{
              marginTop: "35px",
              background:
                "linear-gradient(to right, #2fb0da, #091315, #091315)",
              height: "2px",
              border: "none",
            }}
          />
          <p style={{ color: " #27596a", fontSize: "12px" }}>Mathew Glock</p>
          <p style={{ color: " #27596a", fontSize: "12px" }}>
            Posted on 28 February
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt=""
            style={{ width: "320px", height: "200px", borderRadius: "10px" }}
          />
          <h3>Meditation</h3>
          <p style={{ width: "330px" }}>
            Meditation is a structured, intractive process where an impartial
            third party assists disputing parties in resolving conflict through
            the use of specialized communication and negotiation techniques...
          </p>
          <hr
            style={{
              marginTop: "35px",
              background:
                "linear-gradient(to right, #2fb0da, #091315, #091315)",
              height: "2px",
              border: "none",
            }}
          />
          <p style={{ color: " #27596a", fontSize: "12px" }}>Mathew Glock</p>
          <p style={{ color: " #27596a", fontSize: "12px" }}>
            Posted on 28 February
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt=""
            style={{ width: "320px", height: "200px", borderRadius: "10px" }}
          />
          <h3>Meditation</h3>
          <p style={{ width: "330px" }}>
            Meditation is a structured, intractive process where an impartial
            third party assists disputing parties in resolving conflict through
            the use of specialized communication and negotiation techniques...
          </p>
          <hr
            style={{
              marginTop: "35px",
              background:
                "linear-gradient(to right, #2fb0da, #091315, #091315)",
              height: "2px",
              border: "none",
            }}
          />
          <p style={{ color: " #27596a", fontSize: "12px" }}>Mathew Glock</p>
          <p style={{ color: " #27596a", fontSize: "12px" }}>
            Posted on 28 February
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt=""
            style={{ width: "320px", height: "200px", borderRadius: "10px" }}
          />
          <h3>Meditation</h3>
          <p style={{ width: "330px" }}>
            Meditation is a structured, intractive process where an impartial
            third party assists disputing parties in resolving conflict through
            the use of specialized communication and negotiation techniques...
          </p>
          <hr
            style={{
              marginTop: "35px",
              background:
                "linear-gradient(to right, #2fb0da, #091315, #091315)",
              height: "2px",
              border: "none",
            }}
          />
          <p style={{ color: " #27596a", fontSize: "12px" }}>Mathew Glock</p>
          <p style={{ color: " #27596a", fontSize: "12px" }}>
            Posted on 28 February
          </p>
        </div>
      </Carousel>
    </Box>
  );
};

export default Carousel2;
