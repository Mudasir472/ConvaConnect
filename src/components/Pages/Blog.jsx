import React from "react";
import BlogHeadBG from "./BlogHeadBG";
import Blogleadership from "./Blogleadership";
import BlogFeature from "./BlogFeature";

import img1 from "./Images/cardimg1.jpeg";
import img3 from "./Images/cardimg3.jpg";

import img4 from "./Images/newsimg1.jpg"
import img5 from "./Images/newsimg1.jpg"
import img6 from "./Images/newsimg2.jpg"

export const Blog = () => {
  return (
    <div className="BlogName mt-5 mb-5">
      < BlogHeadBG />
      <Blogleadership />
      <div className="featuresCard">
        <h1 className="d-flex justify-content-start container">Feature Content</h1>
        <div className="cards d-flex flex-wrap align-items-center justify-content-evenly">
          <BlogFeature img={img1} info="info" />
          <BlogFeature img={img1} info="info" />
          <BlogFeature img={img3} info="info" />
        </div>
      </div>

      <div className="Newscard mt-5 mb-5">
        <h1 className="d-flex justify-content-start container">Conva News</h1>
        <div className="cards d-flex flex-wrap align-items-center justify-content-evenly">
          <BlogFeature img={img4} info="info" />
          <BlogFeature img={img5} info="info" />
          <BlogFeature img={img6} info="info" />
        </div>
      </div>
    </div>
  );
};
