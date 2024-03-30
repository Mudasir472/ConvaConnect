import React from "react";
// import "./home.css";
import HomeHeading from "./HomeComponents/HomeHeading";
import { Flexibility } from "./FlexibilityPart";
import Features from "./Features";
import Footer from "./Footer";
export const Home = () => {
  return (
    <div>
      <div data-aos="fade-up-right"><HomeHeading /></div>
      <div data-aos="fade-up-right"><Flexibility/> </div>
      <div data-aos="fade-up-right"><Features/> </div>
      {/* <Footer/> */}
    </div>
  );
};
