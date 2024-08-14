// src/components/Resume.js

import React from 'react';
import './Resume.css';


function Resume() {
  return (
    <div className='resumepagetop'>
      <div className='backgroundresume'></div>
      <div className='backygroundresume'></div>
    <div className="container">
      <div className='toptextresume'>
      <h2>My Resume</h2>
      <h1>Work Experience And Education</h1>
      </div>
      <div class="jumbotron work">
      <div className="row">
        <div className="col-md-6">
          <div className="schooldesc">
            <h1>Bachelor Degree</h1>
            <h2>September 2022 - Current</h2>
            <p>I am currently studying at Clark University, where I'm pursuing courses in computer science, data science, and mathematics. I've taken an array of CS classes that have challenged me and honed my problem-solving skills. I have consistently achieved high honors throughout my time here.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className='schoolright'>
            <div className='classestaken'>
              <p>•Software&nbsp;Engineering • Mobile&nbsp;Software&nbsp;Development• 
                •Database&nbsp;Management&nbsp;&&nbsp;System&nbsp;Design • Algorithms• 
                •Automata&nbsp;Theory • Data&nbsp;Structures • Linear&nbsp;Algebra• 
                •Discrete&nbsp;Math • Intro&nbsp;to&nbsp;Computer&nbsp;Science• 
                •Intro&nbsp;to&nbsp;Data&nbsp;Science• •Honors&nbsp;Calculus• 
              </p>
            </div>
            <h1 className="topuni">Clark&nbsp;University</h1>
            <h2 className="topuni2">GPA:&nbsp;3.86</h2>
          </div>
        </div>
      </div>
      </div>
      <div class="jumbotron work">
      <div className="row">
        <div className="col-md-6">
          <div className="schooldesc">
            <h1>Pugnuts Gelato</h1>
            <h2>Summers 2021-2024</h2>
            <p>Provided high quality customer service in a fast-paced retail environment, ensuring an excellent and efficient experience for patrons.</p>
            <p>Managed inventory and restocked supplies, maintaining optimal levels to handle peak demand times seamlessly.</p>
            <p>Trained and mentored new staff, leveraging extensive knowledge of shop operations to improve overall team performance and efficiency.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className='schoolright'>
            <div className='workskills'>
              <h3>• Time&nbsp;management • Communication •</h3>
              <h3>• Attention&nbsp;to&nbsp;detail •</h3>
              <h3>• Teamwork •</h3>
              <h3>• Problem&nbsp;solving • Adaptibility•</h3>
            </div>
            <h1 className="topuni">Skills</h1>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Resume;