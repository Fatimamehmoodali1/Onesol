"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link href="/">Onesol</Link>
      </div>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <Link href="/about">About</Link>
        <Link href="/ourwork">Our Work</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${isOpen ? "change" : ""}`}></span>
        <span className={`bar ${isOpen ? "change" : ""}`}></span>
        <span className={`bar ${isOpen ? "change" : ""}`}></span>
      </div>
    </nav>
  );
};

export default Navbar;