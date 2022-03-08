import React, { useState } from "react";

import "./Portfolio.scss";

const Portfolio = ({ id, title: one, active, setActive }) => {
  console.log(id);
  return (
    <li
      className={active ? "list active--btn" : "list"}
      onClick={() => setActive(id)}
    >
      {one}
    </li>
  );
};

export default Portfolio;
