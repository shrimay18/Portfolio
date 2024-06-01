// import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';
import './Degree.css';

const Degree = () => {
    return (
        <>
        <div className='heading-degree'>Degree Pursuing</div>
        <div className='degree'>
            <div className='edu'>
                <div className='circle'></div>
                <button className='btn'>Education</button>
            </div>
            <VerticalTimeline lineColor='black'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2017 - Present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaGraduationCap />} position='right' 
                    style={{}}
                >
                    <h3 className="vertical-timeline-element-title">J.C. Bose University of Science and Technology, YMCA</h3>
                    <h4 className="vertical-timeline-element-subtitle">B.Tech in Computer Engineering</h4>
                    <p>
                        I have studied software engineering subjects like Data Structures, Algorithms, DBMS, OS, CA, CN etc.
                    </p>
                    <p>CGPA: 7.14</p>
                    <a className="button" href="https://www.jcboseust.ac.in/" target="_blank" rel="noopener noreferrer">
                        Website
                    </a>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2015 - 2017"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FaSchool />} position='right'
                >
                    <h3 className="vertical-timeline-element-title">G.B.S.S School, Sarojini Nagar</h3>
                    <h4 className="vertical-timeline-element-subtitle">Senior Secondary Education</h4>
                    <p>
                        I have studied the subjects Physics, Chemistry, Mathematics etc.
                    </p>
                    <p>Percentage: 80%</p>
                    <a className="button" href="https://www.example.com/details" target="_blank" rel="noopener noreferrer">
                        Details
                    </a>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
        </>
    );
};

export default Degree;
