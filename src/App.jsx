import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { ThemeProvider } from "styled-components";
// import style from "../src/components/Nav.css";
import "./App.scss";
// import "./App.css";
import {
  Navbar,
  Home,
  About,
  Project,
  Testimonial,
  Contact,
  Footer,
  Jokes,
} from "./components/index";

const theme = {
  colors: {
    body: " #ffaabb",
    nav_clr: "#ff55ff",
    logo_clr: "#f50f60",
    title: "#fff",
    primary_bg: "#f50f70",
  },
  media: {
    mobile: "35rem",
    tablet: "55rem",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <div className="app">
          <div className="home_link">
            <a href="#home">
              <FaArrowUp />
            </a>
          </div>
          <Navbar />
          <Footer />
          <div className="section">
            <Home />
            <About />
            <Project />
            <Testimonial />
            <Contact />
            <Jokes />
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
