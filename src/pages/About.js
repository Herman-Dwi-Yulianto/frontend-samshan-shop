import React from "react";
import Hero from "../components/Hero";
import NavigationBar from "../components/NavigationBar";
import AboutImg from "../images/abt.jpg"
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <NavigationBar />
      {/* <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
        btnClass="hide"
      /> */}
      <AboutUs />
      <Footer />
    </>
  );
};

export default About;
