// src/components/About.js

import React from 'react';
import Myim from './pictures/Myim.jpg';
import './About.css';

function About() {
  return (
<div className='aboutpagetop'>
    <div className='aboutpagebackground'></div>
    <div class="container">
        <div class="jumbotron top">
            <div className='jumb2'>
            <img src={Myim} alt='me' className="responsive-image"/>
            <div className="text-container">
                <h1 className='titleabout'>A bit about me.</h1>    
            </div>
            <p className='paragraphabout'>
                I am an aspiring software engineer with an interest in computer science and data science.
            Currently, I am working towards my B.S. in Computer Science at Clark University, class of 2026.
            My primary interests are in artificial intelligence, machine learning, and data analysis. As a 
            consistent high honors Dean's List student with a 3.86 GPA, my academic journey reflects my 
            passion and dedication to this field.
            </p>
        </div>
        </div>
        <div className="row">
            <div className="col-md-6">
            <div class="jumbotron top">
                <div className="info-box">
                    <h1>Me</h1>
                    <div className="info-item">
                        <span className="label">NAME:</span> <span className="value">Jaden Lewis</span>
                    </div>
                    <div className="info-item">
                        <span className="label">PRONOUNS:</span> <span className="value">He/Him/His</span>
                    </div>
                    <div className="info-item">
                        <span className="label">SCHOOL:</span> <span className="value">Clark University</span>
                    </div>
                    <div className="info-item">
                        <span className="label">AGE:</span> <span className="value">20 Years</span>
                    </div>
                    <div className="info-item">
                        <span className="label">HOMETOWN:</span> <span className="value">Blue Hill, ME</span>
                    </div>
                    <div className="info-item">
                        <span className="label">MAJOR:</span> <span className="value">Computer Science</span>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-6">
            <div class="jumbotron top">
                <div className='boxes'>
                    <h1>Skills</h1>
                    <h2>• Java • &nbsp;Python • &nbsp;SQL • &nbsp;HTML •</h2>
                    <h2>• &nbsp;React • &nbsp;Database • &nbsp;CSS • &nbsp;Git •</h2>
                    <h2>• Django • &nbsp;Docker • &nbsp;Problem&nbsp;Solving •</h2>
                    <h3>• Back-End • &nbsp;Front-End • &nbsp;Project&nbsp;Management&nbsp;•</h3>
                    <h3>• Communication • &nbsp;Leadership • &nbsp;Statistics •</h3>
                    <h3>• Organization • &nbsp;Collaboration •</h3>
                </div>
                </div>
            </div>
        </div>     
    </div>
</div>
  );
}

export default About;