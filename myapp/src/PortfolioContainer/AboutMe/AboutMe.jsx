import React from "react";
import "./AboutMe.css";
import Imge from "../../assets/Home/propic.jpg";

function AboutMe() {
  return (
    <div className="aboutme-container">
      <div className="aboutme-parent">
        <div className="aboutme-heading">
          <h1>About Me</h1>
          <h6>Why Choose Me?</h6>
          <hr />
        </div>
        <div className="aboutme-sec">
          <img src={Imge} />
          <p>
            My objective is to succeed in a stimulating and challenging
            environment while experiencing advancement opportunities. Also, I
            want to excel in this field with hard work, perseverance and
            dedication along with a touch of diversification in my career.
          </p>
          <ul>
            <span>Here are a few highlights</span>
            <li>Full Stack Web and Mobile Developer</li>
            <li>React and React Native</li>
            <li>Interactive Front End as per the design</li>
            <li>Building REST Api & GrapghQL</li>
            <li>Managing Database</li>
            <li>Good at in Javascript, Typescript</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
