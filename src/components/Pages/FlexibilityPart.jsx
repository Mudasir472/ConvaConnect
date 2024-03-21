import React from "react";
import "./FlexibilityPart.css";
import HomeHeading from "./HomeComponents/HomeHeading";
import FlexCards from "./FlexCards";

import img from './Images/videoCall.jpg'
import img1 from './Images/imgg1.jpg'
import img2 from './Images/img2.jpg'
import img3 from './Images/img3.jpg'

export const Flexibility = () => {
  return (
    <div className="flexible">
        <div className="flexHeading d-flex justify-content-center align-items-center">
            <h2>Add flexibility, not complexity</h2>
        </div>
        <div className="flexDesc d-flex justify-content-center align-items-center">
            <h4>A virtual meeting platform designed for flexible work.</h4>
        </div>
        <div className="flexCards container flex-wrap d-flex justify-content-between pt-5">
            <FlexCards img={img1} title="Quick, secure access" desc="Virtual meetings are easier than ever. No downloads necessary to join in."/>
            <FlexCards img={img2} title="Simplified admin" desc="With unified administration across all GoTo products, hosting, managing, monitoring and supporting users couldn’t be simpler."/>
            <FlexCards img={img3} title="Crystal-clear audio" desc="Ensure attendees never miss a word with background noise supression and built-in audio for VoIP and toll."/>
            
        </div>

        <div data-aos="fade-right" className="runPart d-flex justify-content-center align-items-center">
            <h1>Run safe, secure, worry-free virtual meetings</h1>
        </div>
    </div>
  );
};