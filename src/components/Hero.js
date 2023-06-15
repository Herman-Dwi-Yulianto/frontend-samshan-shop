import React from "react";
import "../style/HeroStyle.css";

const Hero = (props) => {
  return (
    <>
      <div className={props.cName}>
        <img alt="HeroImg" src={props.heroImg} />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <h1>{props.title2}</h1>
          <p className="teksjudul">{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
