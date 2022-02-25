import React, { Component } from 'react';

class About extends Component {
  render() {


    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src="images/profilepic.jpg" alt="gabriel Sadigursky Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Gabriel sadigursky</span><br />
						   <span>
                     North bay Village, Florida.
                   </span><br />
						   <span>55 51 997600101</span><br />
                     <span>Gabriel.sadigursky@gmail.com</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href="http://gabrieldev.com"className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
