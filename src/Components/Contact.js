import React, { Component } from 'react';
import emailjs from "emailjs-com";




class Contact extends Component {
   render() {

      function sendEmail(e) {
         e.preventDefault();
 
     emailjs.sendForm('gmail', 'template_bc48enl', e.target, 'user_GTlxptiKDu3LQHwm9LrrO')
         .then((result) => {
             console.log(result.text);
         }, (error) => {
             console.log(error.text);
         });
         e.target.reset()
     }

      return (
         <section id="contact">

            <div className="row section-head">

               <div className="two columns header-col">

                  <h1><span>Get In Touch.</span></h1>

               </div>

               <div className="ten columns">

                  <p className="lead">Here is where you should write your message to readers to have them get in contact with you.</p>

               </div>

            </div>

            <div className="row">
               <div className="eight columns">

               <form onSubmit={sendEmail}>
                  <fieldset>
                     <div className="row pt-5 mx-auto">
                        <div>
                           <label htmlFor="contactName">Name <span className="required">*</span></label>
                           <input type="text" defaultValue="" size="35" id="contactName" placeholder="Name" name="name" onChange={this.handleChange}/>
                        </div>

                        <div>
                           <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                           <input type="email" defaultValue="" size="35" id="contactEmail" placeholder="Email Address" name="email" onChange={this.handleChange}/>
                        </div>

                        <div>
                           <label htmlFor="contactSubject">Subject</label>
                           <input type="text" defaultValue="" size="35" id="contactSubject" placeholder="Subject" name="subject" onChange={this.handleChange}/>
                        </div>

                        <div>
                           <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                           <textarea cols="50" defaultValue="Let me hire you!" rows="15" id="contactMessage" placeholder="Your message" name="message"></textarea>
                        </div>

                        <div>
                           <button className="submit">Submit</button>
                           <span id="image-loader">
                              <img alt="" src="images/loader.gif" />
                           </span>
                        </div>
                     </div>
                  </fieldset>
				   </form>

                  <div id="message-warning"> Error </div>
                  <div id="message-success">
                     <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                  </div>
               </div>


               <aside className="four columns footer-widgets">
                  <div className="widget widget_contact">

                     <h4>Address and Phone</h4>
                     <p className="address">
                        Gabriel Sadigursky<br />
                        North Bay Village, Florida<br />
                        <span>55 51 99760-0101</span>
                     </p>
                  </div>

                  <div className="widget widget_tweets">
                     <h4 className="widget-title">Post's</h4>
                     <ul id="twitter">
                        <li>
                           <span>
                              This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                              <a href="#">http://post</a>
                           </span>
                           <b><a href="#">2 Days Ago</a></b>
                        </li>
                        <li>
                           <span>
                              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                              eaque ipsa quae ab illo inventore veritatis et quasi
                              <a href="#">http://otherPost</a>
                           </span>
                           <b><a href="#">3 Days Ago</a></b>
                        </li>
                     </ul>
                  </div>
               </aside>
            </div>
         </section>
      );
   }
}

export default Contact;
