import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
      <nav className="nav-bar">
        <ul class="Name"><li a href="#Shrimay" class="Shri">Shrimay Somani</li></ul>
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    );
  }
  
  export default NavBar;