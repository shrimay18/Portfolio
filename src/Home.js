import React from 'react'
// import NavBar from './NavBar';
import Intro from './Intro';
import Knowledge from './Knowledge';
import WebDev from './WebDev';
import DSA from './DSA';

const Home = () => {
    return (
        <div className='App'>
            <Intro />
            <Knowledge />
            <WebDev />
            <DSA />
        </div>
    )
}

export default Home;
