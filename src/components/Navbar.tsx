'use client';
import { useState } from 'react';
import '../styles/navbar.css';
import '../styles/responsive.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
  <div className="nav-left">
    <img src="/images/logo.png" alt="Logo" width={50} height={50} className="nav-logo" />
  </div>

  {/* Desktop Nav */}
  <div className="nav-center">
    <div className="nav-links-container">
      <a href="home">Home</a>
      <a href="about">About</a>
      <a href="ourwork">Our Work</a>
      <a href="services">Services</a>
      <a href="blog">Blog</a>
    </div>
  </div>

  <div className="nav-right">
    <button className="expert-button">Speak to an Expert</button>

    {/* Hamburger now placed here */}
    <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  </div>

  {/* Mobile Nav */}
  <div className={`mobile-nav ${menuOpen ? 'show' : ''}`}>
    <a href="home">Home</a>
    <a href="about">About</a>
    <a href="ourwork">Our Work</a>
    <a href="services">Services</a>
    <a href="blog">Blog</a>
    <button className="expert-button">Speak to an Expert</button>
  </div>
</nav>
 
  );
}
