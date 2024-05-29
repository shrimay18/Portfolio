import React from 'react';
import NavBar from './NavBar';
import logo from './logo.svg';
import './App.css';
import Intro from './Intro';
import Knowledge from './Knowledge';
import WebDev from './WebDev';
import DSA from './DSA';
// import wavingHand from './wavingHand.gif';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Knowledge />
      <WebDev />
      <DSA />
    </div>
  );
}

export default App;
