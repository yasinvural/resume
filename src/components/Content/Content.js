import React from "react";
import "./Content.scss";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";

const Content = () => {
  return (
    <div className="content-container">
        <div><Education/></div>
        <div><Contact/></div>
        <div><Experience/></div>
        <div><Skills/></div>
    </div>
  );
};

export default Content;
