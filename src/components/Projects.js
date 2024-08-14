// src/components/Projects.js

import React from 'react';
import pool from './pictures/pool1.png'
import database from './pictures/database.png'
import p2pimage from './pictures/p2pimage.jpg'
import smarthome from './pictures/smarthome.jpeg'
import './Projects.css';

function Projects() {
  return (
    <div className='projectpagetop'>
      <div className='projectpagebackgroundtop'></div>
      <div className='projectpagebackground'></div>
      <div className="container">
        <div className='toptext'>
          <h1>Projects</h1>
          <p>Click on any project to learn more</p>
        </div>
        <div className="album py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="custom-card mb-4 shadow-sm">
                <h1>2D Pool Ball Collision Simulator </h1>
                <img src={pool} className="bd-placeholder-img card-img-top"  width="100%" height="225" alt="Project 1 Thumbnail"/>
                  <div className="card-body">
                    <p className="card-text">A pool game simulator made using <a href="https://processing.org">Processing</a>, leveraging math, and algorithms.</p>
                    <div className="btn-group">
                        <a href="/projects" className="custom-btn btn-sm btn-outline-secondary">Java</a>
                        <a href="/projects" className="custom-btn btn-sm btn-outline-secondary">Math</a>
                        <a href="/projects" className="custom-btn btn-sm btn-outline-secondary">Physics&nbsp;Simulation</a>
                      </div>
                      <div className="btn-group">
                        <a href="/projects" className="custom-btn btn-sm btn-outline-secondary">Processing</a>
                        <a href="/projects" className="custom-btn btn-sm btn-outline-secondary">JPanel</a>
                        <a href="/projects" className="custom-btn btn-sm btn-outline-secondary">Object&nbsp;Oriented</a>
                      </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a href="/poolproject" className="btn btn-sm btn-outline-secondary">Learn More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="custom-card mb-4 shadow-sm">
                <h1>Offline P2P Digital Payment System</h1>
                  <img src={p2pimage} className="bd-placeholder-img card-img-top"  width="100%" height="225" alt="Project 2 Thumbnail"/>
                  <div className="card-body">
                    <p className="card-text">Engineered a secure offline P2P digital payment system with Python and secure hashed code generation.</p>
                    <div className="btn-group">
                        <a href="/projects" className="custom-btn btn-sm btn-outline-secondary">Python</a>
                        <a href="/projects" className="custom-btn btn-sm btn-outline-secondary">QR Code</a>
                        <a href="/projects" className="custom-btn btn-sm btn-outline-secondary">CSV</a>
                      </div>
                      <div className="btn-group">
                        <a href="/projects" className="custom-btn btn-sm btn-outline-secondary">Hashing</a>
                        <a href="/projects" className="custom-btn btn-sm btn-outline-secondary">Recovery</a>
                        <a href="/projects" className="custom-btn btn-sm btn-outline-secondary">Finance</a>
                      </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a href="/P2PPayment" className="btn btn-sm btn-outline-secondary">Learn More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="custom-card mb-4 shadow-sm">
                <h1>Undergraduate Application Tracker</h1>
                <img src={database} className="bd-placeholder-img card-img-top"  width="100%" height="225" alt="Project 3 Thumbnail"/>
                  <div className="card-body">
                    <p className="card-text">Developed a Django based web application to manage student applications and college data using SQL.</p>
                    <div className="btn-group">
                        <a href="/projects" className="custom-btn btn-sm btn-outline-secondary">Django</a>
                        <a href="/projects" className="custom-btn btn-sm btn-outline-secondary">SQL</a>
                        <a href="/projects" className="custom-btn btn-sm btn-outline-secondary">Database&nbsp;Design</a>
                      </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a href="https://www.youtube.com/watch?v=9N9P5jDcozU" className="btn btn-sm btn-outline-secondary">Learn More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="custom-card mb-4 shadow-sm">
                <h1>Smart Home Appliance Controller</h1>
                  <img src={smarthome} className="bd-placeholder-img card-img-top"  width="100%" height="225" alt="Project 2 Thumbnail"/>
                  <div className="card-body">
                    <p className="card-text">A Website that allows user to pair and connect to various home appliances
                    and provides a control interface</p>
                    <div className="btn-group">
                        <a href="/projects" className="custom-btn btn-sm btn-outline-secondary">API</a>
                        <a href="/projects" className="custom-btn btn-sm btn-outline-secondary">Web</a>
                        <a href="/projects" className="custom-btn btn-sm btn-outline-secondary">Django</a>
                      </div>
                      <div className="btn-group">
                        <a href="/projects" className="custom-btn btn-sm btn-outline-secondary">Video</a>
                        <a href="/projects" className="custom-btn btn-sm btn-outline-secondary">Hardware</a>
                      </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a href="/homeautomation" className="btn btn-sm btn-outline-secondary">Learn More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Add more project cards as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;