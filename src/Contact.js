import React from 'react';
import './Contact.css';
import shrimay from './shrimay.jpeg';
import github from './github.png';
import linkedin from './linkedin.png';
import instagram from './instagram.jpeg';
import endimg from './lastimg.png';

function Contact() {
    return (
        <>
            <div className='contacts'>
                <div className='contact_p1'>
                    <div className='contactimagesection'>
                        <img src={shrimay} alt='shrimay' className='shrimay' />
                        <div className='contact-text'>
                            <h1>Reach out to me!</h1>
                            <p>I am available on almost every social media platform.
                                You want to discuss a project or just want to say hi? My Inbox is always open for you. Also i am available usually durring the end of the day and early mornig . I am interested to work on any project related to DSA , WebDev , Springboot & etc.
                            </p>
                            <div className='contacticons'>
                                <a href="https://github.com/dashboard" target="_blank" rel="noreferrer">
                                    <img src={github} alt='github' className='github' />
                                </a>
                                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">
                                    <img src={linkedin} alt='linkedin' className='linkedin' />
                                </a>
                                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                                    <img src={instagram} alt='instagram' className='instagram' />
                                </a>
                            </div>
                            <button className='contactbutton'>My Resume</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contact_p2'>
                <div className='p2_text'>
                    Let's connect & build something awesome together!
                </div>
                <img src={endimg} alt='endimg' className='endimg' />
            </div>
        </>
    );
}

export default Contact;