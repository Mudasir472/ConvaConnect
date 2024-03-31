import React from "react";
import AboutHead from "./AboutHead";
import ContactBottom from "./ContactBottom";
import './ContactBottom.css';
export const Contact = () => {
  return (
    <div className="mainContact">
      <div className="ContactHead ">
        <AboutHead aboutHead="Contact Us" aboutDesc="At ConvaConnect, our solutions simplify how people connect to each other and the world around them, from the largest enterprises to individual users. Whether you’re looking to increase collaboration among dispersed teams, improve customer engagement and support, or security, drop us a line. We're here to help you, your teams, and your business focus on the things that matter." />
      </div>

      <div className="ContactDesc mt-5">
        <ContactBottom aboutMain="Press Contact" aboutMainDesc="MOhammad Abdul Rab" />
        <ContactBottom aboutMain="Customer Support Contact" aboutMainDesc="Mudassir Ahmad Bhat" />
        <ContactBottom aboutMain="Security Contact" aboutMainDesc="Fahad Masroor" />
        <ContactBottom aboutMain="Investor Contact" aboutMainDesc="Dr.Syed Imtiyaz Hasan" />
      </div>
    </div>


  );
};
