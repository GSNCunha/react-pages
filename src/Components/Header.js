import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faReddit,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

class Header extends Component {
  render() {

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm Gabriel Sadigursky.</h1>
            <h3>I'm a North bay Village based <span>Web Developer</span>. Growed up in a programming and robotics environment, in 2020 I decided to jump into Web Dev, I learned several languages and mainly to find solutions..</h3>
            <hr />
            <ul className="social">
               <li key="linkedin">
                  <a href="https://www.linkedin.com/in/gabriel-sadigursky/"><FontAwesomeIcon icon={faLinkedin} /></a>
               </li>
               <li key="instagram">
                  <a href="https://www.instagram.com/gsncunha/"><FontAwesomeIcon icon={faInstagram} /></a>
               </li>
               <li key="github">
                  <a href="https://github.com/GSNCunha"><FontAwesomeIcon icon={faGithub} /></a>
               </li>
               <li key="reddit">
                  <a href="https://www.reddit.com/user/sadigursky"><FontAwesomeIcon icon={faReddit} /></a>
               </li>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
