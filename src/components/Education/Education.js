import React from "react";
import "./Education.scss";

const educationList = [{
    name:'Middle East Technical University Computer Engineering - Master',
    year:'(2017 - )'
  },{
    name:'Middle East Technical University Computer Education and Instructional Technology - BA',
    year:'(2010 - 2015)'
  },{
    name:'IMKB Karakusunlar Anatolian High School',
    year:'(2006 - 2010)'
  }];

const Education = () => {

  const renderEducationList = (education,i) =>{
    return(
      <div key={i} className="education">
        <div className="title">{education.name}</div>
        <div className="year">
          <span><i className="far fa-calendar-alt"></i></span>{education.year}
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="education-container">Education</div>
      <div className="education-list">
        {educationList.map((education,i)=>renderEducationList(education,i))}
      </div>
    </React.Fragment>
  );
};
export default Education;