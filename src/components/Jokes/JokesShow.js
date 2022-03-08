import React, { useState } from "react";
import "./Jokes.css";

const JokesShow = ({ age, id, setup, punchline, removeJoke }) => {
  const [isShow, setIsShow] = useState(false);

  // ! Toggle Functionality..
  const togglePunch = () => {
    setIsShow((prevShow) => !prevShow);
  };

  return (
    <div>
      <div className="jokes__container">
        <div className="jokes__content">
          <div>
            {id} : {setup || <p>Setup : Not found</p>}
          </div>
          <div className={!isShow && "hide"}>
            <span style={{ fontWeight: "bold" }}>
              {isShow && `Punchline: ${punchline}`}
            </span>
          </div>
        </div>
        <div className="button__container">
          <button
            type="submit"
            onClick={togglePunch}
            className={isShow ? "btn__punch btn-active" : "btn__punch"}
          >
            {isShow ? "HidePunchline" : "ShowPunchline"}
          </button>
          <button
            className="remove"
            type="button"
            onClick={() => removeJoke(id)}
          >
            remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default JokesShow;
