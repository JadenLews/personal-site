// src/components/Contact.js

import React from 'react';
import './Contact.css';
import git from './pictures/git.png';
import linked from './pictures/linked.png';
import mail from './pictures/mail.webp';


function Contact() {
  return (
    <div className='outside'>
      <div className='contactbackground'></div>
      <div className='contactbackgrounddown'></div>
      <div className="container">
        <div className='contacttitle'>
          <h1>Contact</h1>
          <h2>Connect with me!</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className='contactimages'>
              <div className='contactgit'>
                <a href="https://github.com/JadenLews">
                  <img src={git} alt="Github"  />
                </a>
                <h2>Check Out My Github</h2>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className='contactimages'>
              <div className='contactlinked'>
                <a href="https://www.linkedin.com/in/jaden-lewis-5379b7236/">
                  <img src={linked} alt="Linkedin"  />
                </a>
                <h2>Add Me On Linkedin</h2>
              </div>
            </div>
          </div>
        </div>
        <div className='contactimages'>
              <div className='contactmail'>
                  <img src={mail} alt="mail"  />
                <h2>Email Me At</h2>
                <h3>lewisjaden19@gmail.com</h3>
              </div>
            </div>
      </div>
    </div>
  );
}

export default Contact;