'use client';
import { useState } from 'react';
import '../styles/navbar.css';         // Your existing navbar styles
import '../styles/responsive.css';     // Global responsive rules

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src="/images/logo.png" alt="Logo" className="nav-logo" />
      </div>
        <div className={`nav-center ${menuOpen ? 'active' : ''}`}>
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
           {/* Hamburger Icon */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
       </div> 
    </nav>
  );
}

// 'use client';
// import { useState } from 'react';
// import '../styles/navbar.css';
// import '../styles/responsive.css';

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
// <<<<<<< HEAD
//     <nav className="navbar-wrapper">
//       <div><img src="/images/logo.png" alt="Logo" className="nav-logo" /></div>
      {/* <img src="/images/logo.png" alt="Logo" className="nav-logo" /> */}
      // <div className="navbar-rounded">
        {/* <img src="/images/logo.png" alt="Logo" className="nav-logo" /> */}
        // <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        //   <a href="/">Home</a>
        //   <a href="/about">About ▾</a>
        //   <a href="/services">Services</a>
        //   <a href="/ourwork">Our Work</a>
        //   <a href="/blog">Blog</a>
          {/* <button className="expert-button">Speak to an Expert</button> */}
// =======
//     <nav className="navbar">
//       <div className="nav-left">
//         <img src="/images/logo.png" alt="Logo" width={50} height={50} className="nav-logo" />
//       </div>

      {/* Hamburger */}
      // <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
      //   <span className="bar"></span>
      //   <span className="bar"></span>
      //   <span className="bar"></span>
      // </div>

      {/* Mobile Nav */}
      // <div className={`mobile-nav ${menuOpen ? 'show' : ''}`}>
      //   <a href="/">Home</a>
      //   <a href="about">About</a>
      //   <a href="ourwork">Our Work</a>
      //   <a href="services">Services</a>
      //   <a href="blog">Blog</a>
      //   <button className="expert-button">Speak to an Expert</button>
      // </div>

      {/* Desktop Nav */}
//       <div className="nav-center">
//         <div className="nav-links-container">
//           <a href="home">Home</a>
//           <a href="about">About</a>
//           <a href="ourwork">Our Work</a>
//           <a href="services">Services</a>
//           <a href="blog">Blog</a>
// >>>>>>> 2452465be743ddfb65b50a8052b6f0f09fc3afa2
//         </div>
//         <button className="expert-button">Speak to an Expert</button>
// <<<<<<< HEAD

//         <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//           <span className="bar"></span>
//           <span className="bar"></span>
//           <span className="bar"></span>
//         </div>
// =======
// >>>>>>> 2452465be743ddfb65b50a8052b6f0f09fc3afa2
//       </div>
//     </nav>
//   );
// }
// <<<<<<< HEAD

// mobile responsive 

// =======
// >>>>>>> 2452465be743ddfb65b50a8052b6f0f09fc3afa2
