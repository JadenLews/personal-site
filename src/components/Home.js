// src/components/Home.js

import React from 'react';
import './Home.css';
import git from './pictures/git.png';
import linked from './pictures/linked.png';

function Home() {
  return (
    <div>
        <div className="container">
            <div className='topwords'>
            <h1 className='title'>Jaden Lewis</h1>
            <p className='genres'>Computer&nbsp;Science&nbsp;&nbsp;&nbsp;&nbsp;
            Mathematics&nbsp;&nbsp;&nbsp;&nbsp;Data&nbsp;Science</p>
            </div>
        </div>
        <div className='images'>
            <div className='git'>
                <a href="https://github.com/JadenLews">
                    <img src={git} alt="Github"  />
                </a>
            </div>
            <div className='linkedin'>
                <a href="https://www.linkedin.com/in/jaden-lewis-5379b7236/">
                    <img src={linked} alt="Linkedin"  />
                </a>
            </div>
        </div>
      <div className='background'></div>
      <div className='backgroundblack'></div>

    </div>
  );
}

export default Home;