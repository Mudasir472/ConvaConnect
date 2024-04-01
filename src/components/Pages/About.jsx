import React from "react";
import AboutHead from "./AboutHead";
import AboutSpec from "./AboutSpec";
import AboutFuture from "./AboutFuture";
import Footer from "./Footer";

export const About = () => {
  return (
    <div className="about">
      <AboutHead aboutHead="About Us." aboutDesc="Since day one, we’ve helped people and businesses do their best work – simply and securely – from anywhere. Today, work and life are intertwined. At GoTo, we like to think of ourselves as your go-to. We help you focus on the things that matter most throughout the day: your projects, your professions, and even your personal passions."/> 

      <AboutSpec />

      <AboutFuture />
    </div>

     
  );
};
