import React from "react";
import Carts from "./Carts";
import Count from "./Count";
import Footer from "./Footer";
import Slider from "./Slider";
import WelcomeArea from "./WelcomeArea";
import Sale from "./Sale";
import "./Main.css";

const Home = () => {
  return (
    <div>
      <div id="preloader">
        <div id="status">&nbsp;</div>
      </div>
      <Slider />
      <Carts />
      <WelcomeArea />
      <Count />
      <Sale />
    </div>
  );
};

export default Home;
