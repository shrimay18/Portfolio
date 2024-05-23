import React from 'react';
import './Intro.css';
import LaptopImg from './lap.png'

function Intro() {
    return (
        <div className="intro">
            <div class="writing">
                <h1>Hello All ! I am Shrimay ...</h1>
                <p>A passionate Developer having an experience in Data Analytics, Machine Learning and Web Development and want to develop sustainable and scalable social and technical systems to create impact

                </p>
                <div class="social">
                    <a href="https://www.linkedin.com/in/shrimay-somani-2a7b381b3/"><i class="fab fa-linkedin"></i></a>
                    
                </div>
            </div>
            <div class="image">
                <img src={LaptopImg} alt="none" />
            </div>
        </div>
    )
}
export default Intro;