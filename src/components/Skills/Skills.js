import React from "react";
import "./Skills.scss";

const skillList = ["html","css-sass","javascript","ecmascript","jquery","react","react-native","redux","webpack","npm","git"];

const Skills = () => {
  const renderSkill = (name) =>{
    return(
        <div key={name} className="skill">{name}</div>
    );
  };
  return (
    <React.Fragment>
      <div className="skills-container">Skills</div>  
      <div className="skill-list">
        {skillList.map(skill => renderSkill(skill))}
      </div>
    </React.Fragment>
  );
};

export default Skills;