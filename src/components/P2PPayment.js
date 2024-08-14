
import React from 'react';
import './PoolProject.css';
import one from './pictures/P2P1.png';
import two from './pictures/P2P2.png';
import three from './pictures/P2P3.png';

function PoolProject() {
    return (
        <div className='poolentire'>
            <div className='poolbackground'></div>
                <div className='container'>
                    <div className='pooltoptext'>
                    <h1>Offline P2P Digital Payment System</h1>
                    <p>For my directed study term project, a small team engineered a secure, 
                        offline payment system using Python, using cryptographic code generation
                         for transaction security and privacy. We developed a terminal based interface
                          for transactions, balance checks, and history logs, with QR code integration
                           for quick verifications. We implemented logging in CSV for transaction integrity, user data recovery, and synchronization.</p>
            </div>
            </div>
            <img src={one} alt='p2ppic1' className='poolpic'/>
            <h1>Skills Used/Learned</h1>
            <p>Python, QR Code, CSV, Hashing, Recovery, Finance</p>
            <div className='pooltwoimg'>
            <div className="row">
            <div className="col-md-6">
            <img src={two} alt='p2ppic2' className='poolpic'/>
            </div>
            <div className="col-md-6">
            <img src={three} alt='p2ppic3' className='poolpic'/>
            </div>
            </div>
            </div>
        </div>
        );
      }
export default PoolProject;