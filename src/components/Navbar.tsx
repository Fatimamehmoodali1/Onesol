// 'use client';
// import { useState } from 'react';
// import '../styles/navbar.css';         // Your existing navbar styles
// import '../styles/responsive.css';     // Global responsive rules

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       <div className="nav-left">
//         <img src="/images/logo.png" alt="Logo" className="nav-logo" />
//       </div>
//         <div className={`nav-center ${menuOpen ? 'active' : ''}`}>
//           <div className="nav-links-container">
//             <a href="home">Home</a>
//             <a href="about">About</a>
//             <a href="ourwork">Our Work</a>
//             <a href="services">Services</a>
//             <a href="blog">Blog</a>
//           </div>
//         </div>

//         <div className="nav-right">
//           <button className="expert-button">Speak to an Expert</button>
//            {/* Hamburger Icon */}
//           <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//             <span className="bar"></span>
//             <span className="bar"></span>
//             <span className="bar"></span>
//           </div>
//        </div> 
//     </nav>
//   );
// }

'use client';
import { useState } from 'react';
import '../styles/navbar.css';
import '../styles/responsive.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-wrapper">
      <div><img src="/images/logo.png" alt="Logo" className="nav-logo" /></div>
      {/* <img src="/images/logo.png" alt="Logo" className="nav-logo" /> */}
      <div className="navbar-rounded">
        {/* <img src="/images/logo.png" alt="Logo" className="nav-logo" /> */}
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="/">Home</a>
          <a href="/about">About ▾</a>
          <a href="/services">Services</a>
          <a href="/ourwork">Our Work</a>
          <a href="/blog">Blog</a>
          {/* <button className="expert-button">Speak to an Expert</button> */}
        </div>
        <button className="expert-button">Speak to an Expert</button>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

// mobile responsive 

