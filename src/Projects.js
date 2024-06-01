import React from 'react';
import './Projects.css';
import projectimage from './projectimage.png';

function Projects() {
    return (
        <div className='projects'>
            <div className='projectp1'>
                <img src={projectimage} alt='projectimage' className='imgproject' />
                <div className='projectp1text'>
                    <h1>Projects</h1>
                    <p>Project 1 is a project that I did for a client. It was a project that was done in a week. The client was very happy with the results and I was very happy with the results. I learned a lot from this project and I am very proud of it.</p>
                </div>
            </div>
            <div className='projectp2'>
                <div className='AAS'>
                    <h2>
                        Advanced Attendance System
                    </h2>
                    <p>
                        This project is a project that I did for a client. It was a project that was done in a week. The client was very happy with the results and I was very happy with the results. I learned a lot from this project and I am very proud of it.
                    </p>    
                </div>
                <div className='TB'>
                    <h2>
                        Telegram Bot
                    </h2>
                    <p>
                        This project is a project that I did for a client. It was a project that was done in a week. The client was very happy with the results and I was very happy with the results. I learned a lot from this project and I am very proud of it. It is very interesting and enjoyable 
                    </p>    
                </div>

            </div>
        </div>
    );
}

export default Projects;