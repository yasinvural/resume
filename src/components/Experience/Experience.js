import React from "react";
import "./Experience.scss";

const experienceList = [{
  title: "Expert Frontend Developer",
  company: "Comodo",
  year: "11/2017 - Ongoing",
  objectives:[
    "Contributed to so many web projects as a front end developer",
    "Used Angular2+ and React",
    "Learned state management for React both using Redux and Context API",
    "Implemented responsive design"
  ]},{
  title: "Web Developer",
  company: "Infoline",
  year: "04/2017 - 11/2017",
  objectives:[
    "Developed a web project for the ministry of agriculture in Turkey",
    "Used Jquery and some 3rd party tools for both charts and grids",
    "Implemented responsive design"
  ]},{
  title: "Expert Multimedia Developer",
  company: "Sebit",
  year: "08/2015 - 04/2017",
  objectives:[
    "Developed e-learning interactive projects",
    "Used HTML, CSS, Jquery"
  ]},{
  title: "Junior Software Developer",
  company: "Duru Bilisim",
  year: "06/2014 - 05/2015",
  objectives:[
    "Developed a web application",
    "Worked on both frontend and backend",
    "Used jquery on the client, and ASP.NET MVC on backend"
  ]}];

const Experience = () => {

  const renderExperiences = (experience,i) =>{
      return(
        <div className="experience" key={i}>
          <div className="title">{experience.title}</div>
          <div className="company">{experience.company}</div>
          <div className="year"><span><i className="far fa-calendar-alt"></i></span>{experience.year}</div>
          <div className="objectives">
            <ul>
              {experience.objectives.map((objective,i)=>
                <li key={i}>{objective}</li>
              )}
            </ul>            
          </div>
        </div>
      );
  };

  return (
    <React.Fragment>
      <div className="experience-container">Experience</div>
      <div className="experience-list">
        {experienceList.map((experience,i)=>renderExperiences(experience,i))}
      </div>
    </React.Fragment>
  );
};

export default Experience;
