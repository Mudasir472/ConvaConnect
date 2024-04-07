import React from "react";
import AboutHead from "./AboutHead";
import AboutSpec from "./AboutSpec";
import AboutFuture from "./AboutFuture";
import Footer from "./Footer";

export const About = () => {
  return (
    <div className="about">
      <AboutHead aboutHead="About Us." aboutDesc="Welcome to ConvoConnect, where we are passionate about revolutionizing the virtual meeting experience. At ConvoConnect, we believe that seamless collaboration is the key to success for teams and organizations worldwide. Our mission is to enhance remote communication by providing innovative solutions that empower teams to connect, collaborate, and succeed."/> 

      <AboutSpec />

      <AboutFuture />
    </div>

     
  );
};
