import React from 'react';
import './Skills.css';
import Skill from './skill.png';
import pbione from './pbi1.jpeg';
import pbitwo from './pbi2.jpeg';
import pbithree from './pbi3.jpeg';
import pbifour from './pbi4.jpeg';
import pbifive from './pbi5.jpeg';
import pbisix from './pbi6.jpeg';

function Skills() {
    return (
        <div class="skills">
            <img src={Skill} alt="Skill" className='skill-img'/>
            <div className='proficiency'>
                <div className='proficiency-heading'>
                    Proficiency
                </div>
                <div class="skills-issue">
                    <div class="progress-bar-container">
                        <div class="progress-bar">
                            <img src = {pbione} alt="Power BI" className='pbi'/>
                            <span class="percentage c"></span>
                        </div>
                    </div>
            
                    <div class="progress-bar-container">
                        <div class="progress-bar">
                            <img src = {pbitwo} alt="Power BI" className='pbi'/>
                            <span class="percentage java"></span>
                        </div>
                    </div>
            
                    <div class="progress-bar-container">
                        <div class="progress-bar">
                            <img src = {pbithree} alt="Power BI" className='pbi'/>
                            <span class="percentage python"></span>
                        </div>
                    </div>
            
                    <div class="progress-bar-container">
                        <div class="progress-bar">
                            <img src = {pbifour} alt="Power BI" className='pbi'/>
                            <span class="percentage html"></span>
                        </div>
                    </div>
            
                    <div class="progress-bar-container">
                        <div class="progress-bar">
                            <img src = {pbifive} alt="Power BI" className='pbi'/>
                            <span class="percentage css"></span>
                        </div>
                    </div>
            
                    <div class="progress-bar-container">
                        <div class="progress-bar">
                            <img src = {pbisix} alt="Power BI" className='pbi'/>
                            <span class="percentage javascript"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Skills;