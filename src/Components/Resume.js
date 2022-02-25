import React, { Component } from 'react';

class Resume extends Component {
  render() {

    return (

      
      <section id="resume">

        <div className="row skill">

        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>

        <div className="nine columns main-col">

          <p>Languages I can code
          </p>

        <div className="bars">
          <ul className="skills">
            <li key="ReactJs"><span style={{width:"50%"}} className="bar-expand reactjs"></span><em>ReactJs</em></li>
            <li key="JavaScript"><span style={{width:"70%"}} className="bar-expand javascript"></span><em>JavaScript</em></li>
            <li key="Functional"><span style={{width:"80%"}} className="bar-expand Functional"></span><em>Functional JavaScript</em></li>
            <li key="Node"><span style={{width:"70%"}} className="bar-expand node"></span><em>Node.js</em></li>
            <li key="Git"><span style={{width:"70%"}} className="bar-expand git"></span><em>Git</em></li>
            <li key="GraphQl"><span style={{width:"40%"}} className="bar-expand graphql"></span><em>GraphQl</em></li>
            <li key="CSS"><span style={{width:"60%"}} className="bar-expand css"></span><em>CSS</em></li>
            <li key="HTML5"><span style={{width:"70%"}} className="bar-expand html5"></span><em>HTML5</em></li>
            <li key="Java"><span style={{width:"85%"}} className="bar-expand java"></span><em>Java</em></li>
            <li key="C"><span style={{width:"95%"}} className="bar-expand c"></span><em>C</em></li>
        </ul>
        </div>
        </div>
        </div>

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                  <div key="Control and Automation Engineering at UFGRS">
                    <h3>Control and Automation Engineering at UFGRS</h3>
                      <p className="info">bachelor degree<span>&bull;</span><em className="date">June 2025</em></p>
                      <p>Learn time management and soft skills</p>
                    </div>
                    <div key="Sinodal">
                    <h3>Sinodal</h3>
                      <p className="info">Robotics and Entrepreneurship<span>&bull;</span><em className="date">December 2019</em></p>
                      <p>learn programming logic, teamwork, Entrepreneurship and persistence</p>
                    </div>
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          <div key="junior company"><h3>junior company</h3>
              <p className="info">advisor and consultant<span>&bull;</span> <em className="date">jun 2021 - jan 2022</em></p>
              <p>I worked advisoring the administration and finance, and beeing a SDR</p>
          </div>
        </div>
    </div>

    <div className="row languages">

      <div className="three columns header-col">
        <h1><span>Languages</span></h1>
      </div>

      <div className="nine columns main-col">

        <p>Languages I can Speak
        </p>

      <div className="bars">
        <ul className="languages">
          <li key="English"><span style={{width:"95%"}} className="bar-expand english"></span><em>English</em></li>
          <li key="Portuguese"><span style={{width:"100%"}} className="bar-expand portuguese"></span><em>Portuguese</em></li>
          <li key="Espanish"><span style={{width:"60%"}} className="bar-expand espanish"></span><em>Espanish</em></li>
          <li key="German"><span style={{width:"30%"}} className="bar-expand german"></span><em>German</em></li>
        </ul>
      </div>
      </div>
      </div>

   </section>
    );
  }
}

export default Resume;
