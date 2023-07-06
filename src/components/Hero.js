import React from "react";
import "../style/HeroStyle.css";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../images/abt.jpg";
import slide2 from "../images/heroImg.jpg";
import slide3 from "../images/mbak.jpg";

const Hero = () => {
  return (
    <>
      <Carousel>
        <div className="carousel-item" interval={1000}>
          <img className="d-block w-100" src={slide1} alt="First slide" />
          <div className="carousel-caption">
              <h3>Selamat Datang di Samshan Shop</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <p>
                <a href="#" class="btn btn-warning mt-3">
                  Selengkapnya
                </a>
              </p>
          </div>
        </div>
        <div className="carousel-item" interval={1000}>
          <img className="d-block w-100" src={slide2} alt="Second slide" />
          <div className="carousel-caption">
              <h3>Selamat Datang di Samshan Shop</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>
                <a href="#" class="btn btn-warning mt-3">
                  Selengkapnya
                </a>
              </p>
          </div>
        </div>
        <div className="carousel-item" interval={1000}>
          <img className="d-block w-100" src={slide3} alt="Third slide" />
          <div className="carousel-caption">
              <h3>Selamat Datang di Samshan Shop</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <p>
                <a href="#" class="btn btn-warning mt-3">
                  Selengkapnya
                </a>
              </p>
          </div>
        </div>
      </Carousel>
      {/* <div className={props.cName}>
        <img alt="HeroImg" src={props.heroImg} />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <h1>{props.title2}</h1>
          <p className="teksjudul">{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div> */}
    </>
  );
};

export default Hero;
