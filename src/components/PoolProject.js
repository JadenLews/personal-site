
import React from 'react';
import './PoolProject.css';
import one from './pictures/pool1.png';
import two from './pictures/pool2.png';
import three from './pictures/pool3.png';

function PoolProject() {
    return (
        <div className='poolentire'>
            <div className='poolbackground'></div>
                <div className='container'>
                    <div className='pooltoptext'>
                    <h1>Algorithms Pool Project</h1>
                    <p>For my algorithms class project, I created a pool game simulator using 
                        the Processing tool. Leveraging math, and algorithms, I engineered an
                         interactive environment that emulates the mechanics of a real-life pool
                          game. Through intuitive user controls and visually appealing graphics,
                           the project demonstrates my skills with algorithmic principles.</p>
            </div>
            </div>
            <img src={two} alt='poolpic1' className='poolpic'/>
            <h1>Skills Used/Learned</h1>
            <p>Java, Math, Physics Simulation, JPanel, Processing,Object-Oriented Design, Physics Simulation</p>
            <div className='pooltwoimg'>
            <div className="row">
            <div className="col-md-6">
            <img src={one} alt='poolpic2' className='poolpic'/>
            </div>
            <div className="col-md-6">
            <img src={three} alt='poolpic3' className='poolpic'/>
            </div>
            </div>
            </div>
        </div>
        );
      }
export default PoolProject;