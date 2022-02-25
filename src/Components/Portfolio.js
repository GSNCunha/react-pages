import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                 <div key="Functional JavaScrip Calculator!" className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="https://github.com/GSNCunha/Functional-JS-Calculator" title="Functional JavaScrip Calculator!">
                      <img alt="Functional JavaScrip Calculator!" src="images/portfolio/Functional-Calculator.jpg" />
                      <div className="overlay">
                          <div className="portfolio-item-meta">
                        <h5>Functional JavaScrip Calculator!</h5>
                            <p>A calculator that works fully with Functional JavaScript</p>
                          </div>
                        </div>
                      <div className="link-icon"><i className="fa fa-link"></i></div>
                    </a>
                  </div>
                </div>
                 <div key="Resume Website" className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="https://gsncunha.github.io/react-resume-template/" title="Resume Website">
                      <img alt="Resume Website" src="images/portfolio/resume-website.jpg" />
                      <div className="overlay">
                          <div className="portfolio-item-meta">
                        <h5>Resume Website</h5>
                            <p>my own resume react-app-site!</p>
                          </div>
                        </div>
                      <div className="link-icon"><i className="fa fa-link"></i></div>
                    </a>
                  </div>
                </div>
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
