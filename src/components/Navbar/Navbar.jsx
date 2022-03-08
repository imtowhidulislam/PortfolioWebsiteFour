import React, { useState, useEffect, useRef } from "react";
// import { StyledNavbar } from "../styles/Navbar.styled";
// const nav = document.querySelector("nav");
// const menu = document.querySelector(".menu");
// const links = document.querySelectorAll(".links");
// const navHeight = nav.getBoundingClientRect().height;
import "./Nav.scss";
const Navbar = () => {
  // const useBtn = useRef(null);
  const navheight = useRef(null);

  const [dataVisible, setDatavisible] = useState("false");

  const handleHide = (e) => {
    setDatavisible(false);
  };
  return (
    <nav ref={navheight}>
      <div className="container">
        <h1 className="nav__logo">Towhid tech</h1>
        <div
          className={`menu menu_col ${dataVisible && "menu--active"}`}
          data-visible={dataVisible}
        >
          <a href="#home" className="links" onClick={handleHide}>
            Home
          </a>
          <a href="#about" className="links" onClick={handleHide}>
            About
          </a>
          <a href="#project" className="links" onClick={handleHide}>
            Projects
          </a>
          <a href="#contact" className="links" onClick={handleHide}>
            Contact
          </a>

          <a href="#testimonial" className="links" onClick={handleHide}>
            Testimonial
          </a>
        </div>

        <button
          className={`hamburger ${dataVisible && "is-active"}`}
          onClick={() => setDatavisible(!dataVisible)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
