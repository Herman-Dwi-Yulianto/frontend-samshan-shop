import React from "react";
import NavigationBar from "../components/NavigationBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import IsiHome from "../components/IsiHome";
import waves from "../images/waves.png"


const Home = () => {
  return (
    <>
      <NavigationBar />
      <Hero
        cName="hero"
        heroImg={waves}
        title="Selamat Datang Di"
        title2="Samshan Shop Kaos Polos"
        text="Chose Your favorite T-shirt"
        buttonText="Swipe Up"
        url="/"
        btnClass="show"
      />
      <IsiHome />
      <Footer />
    </>
  );
};

export default Home;
