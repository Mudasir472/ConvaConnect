import React from "react";
import BlogHeadBG from "./BlogHeadBG";
import Blogleadership from "./Blogleadership";
import BlogFeature from "./BlogFeature";

import img1 from "./Images/collab.jpg";
import img2 from "./Images/imgHome.jpg"
import img3 from "./Images/imgPower.jpg";

import img4 from "./Images/newsImg.jpg"
import img5 from "./Images/newsImgs.jpg"
import img6 from "./Images/newsimg2.jpg"

export const Blog = () => {
  return (
    <div className="BlogName mt-5 mb-5">
      < BlogHeadBG />
      <Blogleadership />
      <div className="featuresCard">
        <h1 className="d-flex justify-content-start container">Feature Content</h1>
        <div className="cards d-flex flex-wrap align-items-center justify-content-evenly">
          <BlogFeature img={img1} info="Experience Seamless Collaboration: Dive into the World of ConvoConnect's Virtual Meetings!" />
          <BlogFeature img={img2} info="Empower Your Team with ConvoConnect: Elevate Your Conference Experience Today!" />
          <BlogFeature img={img3} info="Unlock the Future of Virtual Meetings: Discover the Power of ConvoConnect." />
        </div>
      </div>

      <div className="Newscard mt-5 mb-5">
        <h1 className="d-flex justify-content-start container">Conva News</h1>
        <div className="cards d-flex flex-wrap align-items-center justify-content-evenly">
          <BlogFeature img={img4} info="Stay Ahead of the Curve: Get the Latest Updates with ConvoNews!" />
          <BlogFeature img={img5} info="Your Source for All Things ConvoConnect: Tune in to ConvoNews Today!" />
          <BlogFeature img={img6} info="Insights, Trends, and Innovations: Dive into ConvoNews for the Latest in Conferencing" />
        </div>
      </div>
    </div>
  );
};
