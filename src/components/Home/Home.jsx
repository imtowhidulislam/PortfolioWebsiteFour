import { FaArrowDown } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";
import { init } from "ityped";
// import About from "../About/About";
// import React from "react";
// import style from "./Home.styled.js";
// import { StyledHome } from "../styles/Home.styled";
// import { Flex } from "../styles/Flex.styled";
// import { Image } from "../styles/Flex.styled";
// import { Button } from "../styles/Button.styled";
// import { Title } from "../styles/Title.styled";
// import HomeStyle from "./Home.css";
import "./Home.scss";
import image from "./towhid.JPG";

const Home = () => {
  const useText = useRef();

  useEffect(() => {
    console.log("useEffect");
    init(useText.current, {
      showCurson: false,
      backDelay: 1500,
      cursorChar: "|",
      strings: ["Learner", "Dreamer", "Exprlorer", "Web developer"],
    });
  }, []);
  return (
    <>
      <div className="H_center H_home" id="home" bg="#bbbaaa">
        <div className="H_container">
          <h2 className="H_main_title">Home components</h2>
          <div className="H_flex">
            <div className="H_right_col">
              <div className="H_hero_image_container">
                <img
                  className="H_hero_image"
                  // src="http://unsplash.it/1000/1000?image=786"
                  src={image}
                  alt=""
                />
              </div>
            </div>
            <div className="H_left_col">
              <div className="H_article">
                <h2 className="H_sub_title title_one">Hi, Everyone,I'm</h2>
                <h2 className="H_sub_title">Towhidul Islam</h2>
                <h3 className="dynamicText">
                  I'm a <span ref={useText}></span>
                </h3>
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                  maiores ad quibusdam totam sapiente dolore cum tenetur similique
                  quos necessitatibus delectus culpa veritatis provident ea maxime
                  rem, nemo iste eveniet!
                </p> */}

                <button href="#about" className="H_btn">
                  <a href="#about" className="link">
                    <FaArrowDown />
                  </a>
                  {/* <FaArrowDown /> */}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*         <div className="H_first_section">
          <h2 className="H_first_sec__title">Our Product</h2>
          <div className="H_grid">
            <div className="card card--1">
              <h2 className="card_title card_title--1">Card1</h2>
              <p className="card_para card_para--1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque, molestias. Fuga, natus labore! Odit, fugit repellat!
                Beatae, nobis ratione? Laudantium.
              </p>
              <button className="card_btn card_btn--1">card1</button>
            </div>
            <div className="card card--2">
              <h2 className="card_title card_title--2">Card2</h2>
              <p className="card_para card_para--2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque, molestias. Fuga, natus labore! Odit, fugit repellat!
                Beatae, nobis ratione? Laudantium.
              </p>
              <button className="card_btn card_btn--2">card2</button>
            </div>
            <div className="card card--3">
              <h2 className="card_title card_title--3">Card3</h2>
              <p className="card_para card_para--3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque, molestias. Fuga, natus labore! Odit, fugit repellat!
                Beatae, nobis ratione? Laudantium.
              </p>
              <button className="card_btn card_btn--3">card3</button>
            </div>
            <div className="card card--4">
              <h2 className="card_title card_title--4">Card4</h2>
              <p className="card_para card_para--4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque, molestias. Fuga, natus labore! Odit, fugit repellat!
                Beatae, nobis ratione? Laudantium.
              </p>
              <button className="card_btn card_btn--4">card4</button>
            </div>
            <div className="card card--5">
              <h2 className="card_title card_title--5">Card5</h2>
              <p className="card_para card_para--5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque, molestias. Fuga, natus labore! Odit, fugit repellat!
                Beatae, nobis ratione? Laudantium.
              </p>
              <button className="card_btn card_btn--5">card5</button>
            </div>
            <div className="card card--6">
              <h2 className="card_title card_title--6">Card6</h2>
              <p className="card_para card_para--6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque, molestias. Fuga, natus labore! Odit, fugit repellat!
                Beatae, nobis ratione? Laudantium.
              </p>
              <button className="card_btn card_btn--6">card6</button>
            </div>
          </div>
        </div> */}
      </div>

      {/* new section+++++++++ */}
    </>
  );
};

export default Home;
