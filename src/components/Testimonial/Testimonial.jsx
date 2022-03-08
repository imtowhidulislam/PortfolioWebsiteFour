import React, { useState } from "react";
import { FaChevronRight, FaInstagram } from "react-icons/fa";
import { TestimonialData } from "./TestimonialData";
import "./Testimonial.scss";

const Testimonial = () => {
  const [tesData, setTesData] = useState(TestimonialData);
  return (
    <>
      <div className="testimonial_container">
        <h2 className="title">Testimonial Component</h2>
        <div className="testimonial" id="testimonial">
          <div className="card__container ">
            {tesData.map((person) => {
              const {
                id,
                img,
                title,
                arrow,
                sun_title,
                img_icon,
                desc,
                feature,
              } = person;

              return (
                <div
                  className={feature ? "main_card feature" : "main_card"}
                  key={id}
                >
                  <div className="card__wrapper">
                    <div className="first_row">
                      <div className="arrow">
                        <img src={arrow} alt="" />
                      </div>
                      <img className="main_image" src={img.url} alt="" />
                      <div className="ins">
                        <img src={img_icon} alt="" />
                      </div>
                    </div>
                    <p className="second_row">{desc}</p>
                    <h2 className="third_row">{title}</h2>
                    <h3 className="forth_row">{sun_title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
