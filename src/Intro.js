import React from 'react';
import './Intro.css';
import LaptopImg from './lap.png'
import wavingHand from './wavingHand.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
function Intro() {
    return (
        <div className="intro">
            <div class="writing">
                <h1>Hello All ! I am Shrimay ...
                    <img src={wavingHand} alt="none" className='home-img-right' />
                </h1>
                <p>A passionate Developer having an experience in Data Analytics, Data Structures & Algorithm and Web Development and want to develop sustainable and scalable social and technical systems to create impact

                </p>
                <div class="home-social">

                    <a href="https://www.instagram.com/shrimay_somani/?igsh=MTJpMTdiazFpcjB0MQ%3D%3D" className='h-social'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://github.com/dashboard" className='h-social'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://in.linkedin.com/in/shrimay-somani-9769a12a2" className='h-social'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>

                </div>
            </div>
            <div class="image">
                <img src={LaptopImg} alt="none" />
            </div>
        </div>
    )
}
export default Intro;