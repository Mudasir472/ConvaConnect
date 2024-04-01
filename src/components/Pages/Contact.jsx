import React from "react";
import AboutHead from "./AboutHead";
import ContactBottom from "./ContactBottom";
import './ContactBottom.css';
import ContactMain from "./contactMain";
export const Contact = () => {
  return (
    <div className="mainContact">
      <div className="ContactHead ">
        <AboutHead aboutHead="Contact Us" aboutDesc="Thank you for your interest in ConvoConnect! We value your feedback and inquiries. Please feel free to reach out to us using the contact information below. Our team is dedicated to providing excellent support and assistance to ensure your experience with our platform is seamless and satisfying." />
      </div>
      <ContactMain/>
      <div className="ContactDesc pt-5">
        <ContactBottom aboutMain="Press Contact" aboutMainDesc="MOhammad Abdul Rab" />
        <ContactBottom aboutMain="Customer Support Contact" aboutMainDesc="Mudassir Ahmad Bhat" />
        <ContactBottom aboutMain="Security Contact" aboutMainDesc="Fahad Masroor" />
        <ContactBottom aboutMain="Investor Contact" aboutMainDesc="Dr.Syed Imtiyaz Hasan" />
      </div>
    </div>


  );
};
