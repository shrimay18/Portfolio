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
                <a href="https://github.com/shrimay18/Image_Editor">
                    <div className='AAS'>
                        <h2>
                            Image Editor
                        </h2>
                        <p>
                            This project was made in first year of my college in the first trimester after learning DSA & made me understand how even a pixel change causes a image look better & understand the basics of image editing                  </p>
                    </div>
                </a>
                <a href="https://github.com/shrimay18/Quiz_App">
                    <div className='TB'>
                        <h2>
                            Quiz App
                        </h2>
                        <p>
                            This project is a projct was made using Javascript . It was made as an submission to the asignment given in the class . This project help me improve my Javascript skills and excell in it
                        </p>
                    </div>
                </a>

            </div>
        </div>
    );
}

export default Projects;