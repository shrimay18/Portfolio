import React from 'react';
import NavBar from './NavBar';
import logo from './logo.svg';
import './App.css';
import Intro from './Intro';
import Knowledge from './Knowledge';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Knowledge />
    </div>
  );
}

export default App;
