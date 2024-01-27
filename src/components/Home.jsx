import React from "react";
import "../css/Home.css";
import "../index.css";
import Insta from "../images/icons/instagram.png";
import Fb from "../images/icons/facebook.png";
import Yt from "../images/icons/youtube.png";

function Home() {
  return (
    <>
      <div className="Home_comp">
        <div class="container">
          <h1>Join For Best Price:-</h1>
          <form className="form-group">
            <input type="text" placeholder="Enter your gender" />
            <input type="text" placeholder="Enter your Fitness goal" />
            <input type="text" placeholder="Enter your Locality" />
            <button class="btn"> Submit Now</button>
          </form>
        </div>
        <div class="container2">
          <h1>
            <a href="#">
              {" "}
              ULTRA <span>GYM </span>{" "}
            </a>
          </h1>
          <h2>FOR ATHELETES</h2>
          <p>
            Ultra Gym is the best gym in bhopal with qualified trainer and
            affordable price. Our main aim is to give proper training , diet and
            supplement information to make one acheive its dream physique.
          </p>
        </div>
        <span class="container3">
          <a href="https://www.facebook.com/" target="_blank">
            <img src={Fb} alt="" />{" "}
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <img src={Yt} alt="" />{" "}
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={Insta} alt="" />{" "}
          </a>
        </span>
      </div>
    </>
  );
}

export default Home;
