import React from "react";
import "./Header.scss";
import cv from "../../assets/img.jpg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="info-container">
        <div className="name">Yasin Vural</div>
        <div className="title">Front-end Developer</div>
      </div>
      <div className="avatar-container">
          <img src={cv} alt="YV"/>
      </div>
    </div>
  );
};

export default Header;