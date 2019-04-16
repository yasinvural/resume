import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="contact-container">Contact</div>
      <div className="contact-list">
          <div className="contact">
              <span><i className="fab fa-github fa-2x"></i></span>
              <span> 
                <a href="https://github.com/yasinvural" target="_blank">
                  github.com/yasinvural
                </a>
              </span>  
          </div>
          <div className="contact">
              <span><i className="fas fa-envelope-open fa-2x"></i></span>
              <span>yasinvural0@gmail.com</span>  
          </div>
          <div className="contact">
              <span><i className="fab fa-linkedin fa-2x"></i></span>
              <span> 
                <a href="https://www.linkedin.com/in/yasin-vural-4bb814130/" target="_blank">
                  linkedin.com/in/yasin-vural-4bb814130/
                </a>
                </span>  
          </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;