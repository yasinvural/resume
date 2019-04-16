import React from 'react';
import './App.scss';
import Header from "../Header/Header";
import Content from "../Content/Content";

const App = () =>{
  return (
    <div className="resume-container">
      <Header/>
      <Content/>
    </div>
  );
};

export default App;