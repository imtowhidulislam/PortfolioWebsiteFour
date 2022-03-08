import React, { useState, useRef, useEffect } from "react";
import { Data } from "../Portfolio/PortfolioData";
import Portfolio from "../Portfolio/Portfolio";
import {
  Home,
  About,
  Projects,
  Contact,
  Footer,
} from "../Portfolio/ProjectData";

import "./Project.scss";
const defaultImage = "http://unsplash.it/1000/1000?image=324";

const Project = () => {
  // const [personData, setPersonData] = useState(Data);
  const [catagory, setCatagory] = useState([]);
  const [active, setActive] = useState("Home");
  const [isActive, setIsActive] = useState(false);
  const useTarget = useRef();
  const [name, setName] = useState("");
  console.log(catagory);
  const Data = [
    {
      id: "Home",
      title: "Home",
    },
    {
      id: "About",
      title: "About",
    },
    {
      id: "Projects",
      title: "Projects",
    },
    {
      id: "Contact",
      title: "Contact",
    },
    /* {
      id: "Footer",
      title: "Footer",
    }, */
  ];
  // console.log(personData);
  useEffect(() => {
    switch (active) {
      case "Home":
        setCatagory(Home);
        break;
      case "About":
        setCatagory(About);
        break;
      case "Projects":
        setCatagory(Projects);
        break;
      case "Contact":
        setCatagory(Contact);
        break;
      case "Footer":
        setCatagory(Footer);
        break;
      default:
        setActive("Home");
    }
  }, [active]);

  return (
    <>
      <div className="P_project" id="project">
        <h2 className="P_title">Project</h2>

        <div className="P_main_content">
          <div className="btn_container">
            <ul ref={useTarget}>
              {Data.map((person) => {
                const { id, title } = person;
                return (
                  <Portfolio
                    title={title}
                    id={id}
                    active={active === id}
                    setActive={setActive}
                  />
                );
              })}
            </ul>
          </div>
          <div className="items">
            {catagory.map((data) => {
              const { id, img, title } = data;
              console.log(img);
              return (
                <div className="item" key={id}>
                  <img src={img || defaultImage} alt="" />
                  <h3 className="item_title">{title}</h3>
                </div>
              );
            })}
            {/* <div className="item">
              <img src="http://unsplash.it/500/500?image=235" alt="" />
              <h3 className="item_title">hello</h3>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
