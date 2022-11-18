import React from "react";
import Navbar from "../Navbar/Navbar";
import Carousel from "../Homepage/Carousel";
import Swiper from "../Homepage/Swiper";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <div className="buttons" style={{marginBottom:"10px", marginTop:"15px"}}>
        <button className="btn1">Make Your Profile</button>
        <button className="btn1">See Your Lists</button>
      </div>
      <div style={{marginTop:"40px", padding:"15px", height:"35rem"}}>
        <h1 style={{color:"#F1D112", marginBottom:"20px", marginLeft:"20px"}}>News</h1>
      <Swiper/>
      </div>
      <a href="#" style={{ textDecoration: "none" }}>
        <div className="international">
          <div
            className="photo"
            data-aos="fade-right"
            data-aos-offset="500"
            data-aos-easing="ease-in-sine"
          >
            <img src="src\Images\globe.jpg" alt="Error" />
          </div>
          <div className="text"
          data-aos="fade-left"
          data-aos-offset="500"
          data-aos-easing="ease-in-sine"
          >
            <h2>INTERNATIONAL SCHOLARSHIPS</h2>
            <p style={{ marginTop: "-20%" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              ab architecto voluptatem voluptates. Eius incidunt id rem
              voluptates excepturi laboriosam sint veritatis, nesciunt ea
              aliquam, assumenda aperiam perspiciatis esse voluptatum nemo non,
              blanditiis laudantium
            </p>
          </div>
        </div>
      </a>
      <a href="#" style={{ textDecoration: "none" }}>
        <div className="national">
          <div className="text"
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-easing="ease-in-sine">
            <h2>NATIONAL SCHOLARSHIPS</h2>
            <p style={{ marginTop: "-35%" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              ab architecto voluptatem voluptates. Eius incidunt id rem
              voluptates excepturi laboriosam sint veritatis, nesciunt ea
              aliquam, assumenda aperiam perspiciatis esse voluptatum nemo non,
              blanditiis laudantium
            </p>
          </div>
          <div
            className="photo"
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-easing="ease-in-sine"
            
          >
            <img
              src="src\Images\119517630_108761140978167_8352676185718182111_n 1.png"
              alt="Error"
            />
          </div>
        </div>
      </a>
      <div className="footer">
        <div className="footerimg">
          <img
            id="image"
            src="src\Images\Green Modern Education Online Course Logo (3) 1.png"
            alt="Error"
          />
        </div>
        <div className="footertext">
          <div className="leftbox">
            <ul>
              <li>About Us</li>
              <li>Terms And Conditions</li>
            </ul>
          </div>
          <div className="middlebox">
            <ul>
              <li>Privacy Policy</li>
              <li>Hyperlink Policy</li>
            </ul>
          </div>
          <div className="rightbox">
            <ul>
              <li>Disclaimer</li>
              <li>Sitemap</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
