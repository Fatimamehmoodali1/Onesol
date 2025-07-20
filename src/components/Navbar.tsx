'use client';
import { useState } from 'react';
import '../styles/navbar.css';
import '../styles/responsive.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="nav-left">
        <img
          src="/images/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="nav-logo"
        />
      </div>

      {/* Center Nav Links (Desktop) */}
      <div className="nav-center">
        <div className="nav-links-container">
          <a href="home">Home</a>
          <a href="about">About</a>
          <a href="ourwork">Our Work</a>
          <a href="services">Services</a>
          <a href="blog">Blog</a>
        </div>
      </div>

      {/* Right: Button + Hamburger (hamburger shown only on mobile) */}
      <div className="nav-right">
        <button className="expert-button">Speak to an Expert</button>

        <div
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      {/* Mobile Nav Slide-In */}
      <div className={`mobile-nav ${menuOpen ? 'show' : ''}`}>
        <a href="home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="ourwork" onClick={() => setMenuOpen(false)}>Our Work</a>
        <a href="services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="blog" onClick={() => setMenuOpen(false)}>Blog</a>
        <button className="expert-button">Speak to an Expert</button>
      </div>
    </nav>
  );
}
