import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header/header';
import Topcontainer from './Top container/Topcontainer';
import reportWebVitals from './reportWebVitals';
import Skills from './skillcontainer/skills';
import Project from './project/project'
import Contact from './contact/contact'
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Topcontainer/>
    <Skills/>
    <Project/>
    <Contact/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
