import React from "react";
import NavigationBar from "../components/NavigationBar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        title="Kata-Kata Hari Ini"
        text="Choose Your Favourite T-Shirts"
        buttonText="Swipe Up"
        url="/"
        btnClass="show"
      />
    </>
  );
};

export default Home;
