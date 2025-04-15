import React from "react";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import Services from "./Services";
import About from "./About";
import Portfolio from "./Portfolio";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="">d</div>
      <Card />
      <About />
      <Services />
      <Portfolio />
    </>
  );
};

export default Home;
