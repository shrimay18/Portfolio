import React from 'react';
import './NavBar.css';
import Education from './Education';

function NavBar() {
  return (
    <nav className="nav-bar">
      <ul class="Name"><li a href="#Shrimay" class="Shri">Shrimay Somani</li></ul>
      <ul class="nav-links">
        <li><a href="/home">Home</a></li>
        <li><a href="/education">Education</a></li>
        <li><a href="/skills">Skills</a></li>
        <li><a href="/projects">Project</a></li>
        <li><a href="/contact">Contact</a></li>

      </ul>
    </nav>
  );
}

export default NavBar;