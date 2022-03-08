import React, { useState, useEffect } from "react";

import {
  FaArrowLeft,
  FaArrowRight,
  FaCalculator,
  FaEdgeLegacy,
  FaCompass,
  FaWallet,
} from "react-icons/fa";
// import "./About.scss";
import { aboutData } from "./AboutData";
import "./About.scss";

const About = () => {
  const [aboutContent, setAboutContent] = useState(aboutData);
  const [counter, setCounter] = useState(0);
  // console.log(counter);
  const arrLength = aboutContent.length;
  // console.log(arrLength);
  const increase = (e) => {
    e.preventDefault();
    setCounter((prevVal) => {
      console.log(counter);
      if (prevVal >= arrLength - 1) {
        setCounter(0);
      }
      return prevVal + 1;
    });
  };
  const decrease = (e) => {
    e.preventDefault();
    setCounter((prevVal) => {
      if (prevVal <= 0) {
        setCounter(arrLength - 1);
      }
      console.log(counter);
      return prevVal - 1;
    });
  };
  return (
    <div className="A_about" id="about">
      <h2 className="About__title">About Component</h2>
      <div className="works">
        <div className="slider_container">
          {aboutContent.map((dataAbout) => {
            const { id, title, icon, article, link, img } = dataAbout;
            return (
              <div
                className="slider"
                key={id}
                style={{ transform: `translateY(-${counter * 100}% )` }}
              >
                <div className="left">
                  <div className="icon_container">
                    <img src={icon} alt="" />
                  </div>
                  <h2>{title}</h2>
                  <p>{article}</p>
                  <li>{link}</li>
                </div>
                <div className="right">
                  <div className="img_container">
                    <img className="image" src={img.url} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
          <div className="navigation rightAngle" onClick={increase}>
            <FaArrowRight />
          </div>
          <div className="navigation leftAngle" onClick={decrease}>
            <FaArrowLeft />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
