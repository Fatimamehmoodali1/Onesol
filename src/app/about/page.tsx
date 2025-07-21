"use client"
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import './about.css';


export default function AboutPage() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="/images/logo.png" alt="" />
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="ourwork">Our Work</a></li>
          <li><a href="services">Services</a></li>
          <li><a href="blog">Blog</a></li>
        </ul>
        <button className="nav-button">Contact Us</button>
      </nav> 

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1 className="hero-title">About Us</h1>
          <p className="hero-breadcrumb">Home / About Us</p>
        </div>
      </section>

      {/* Top Orange Stripe */}
      <div className="about-stripe"></div>

      {/* About Content Section */}
      <section className="about-section">
        <div className="about-container">
          {/* Left Images */}
          <div className="about-images">
            <img src="/images/about-2.png" alt="Image 1" className="img-top" />
            <img src="/images/about-1.png" alt="Image 2" className="img-bottom" />
          </div>

          {/* Right Content */}
          <div className="about-content">
            <h3 className="section-label">ABOUT ONESOL</h3>
            <h2 className="main-heading">
              We Are Increasing Business Success With <span className="highlight">Technology</span>
            </h2>
            <p className="about-desc">
              It is a long established fact that a reader will be distracted the readable
              content of a page when looking at layout the point.
            </p>

            <div className="features">
              <div className="feature-box">
                <img src="/images/p-icon.png" alt="Problem Solving" className='feature-icon' />
                <div>
                  <h4 className="feature-title orange">Problem Solving</h4>
                  <p className='feature-text'>Aliquam erat volutpat<br />Nullam imperdiet</p>
                </div>
              </div>
              <div className="feature-box">
                <img src="/images/m-icon.png" alt="Mission" className='feature-icon' />
                <div>
                  <h4 className="feature-title blue">Mission & VisionT</h4>
                  <p className='feature-text'>Aliquam erat volutpat<br />Nullam imperdiet</p>
                </div>
              </div>
            </div>

            <div className="cta-row">
              <button className="cta-button">Explore More →</button>
              <div className="ceo-info">
                <div className="ceo-img"></div>
                <div>
                  <strong>M Haris Khan Durrani</strong>
                  <p>Company Of CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="tech-section">
        <h4 className="tech-subheading">Our offering</h4>
        <h2 className="tech-heading">
          Enhance and Pioneer Using <br /> Technology Trends
        </h2>

        <div className="tech-cards">
          {[
            { icon: "web", label: "Website" },
            { icon: "android", label: "Android" },
            { icon: "ios", label: "iOS" },
            { icon: "watch", label: "Watch" },
            { icon: "tv", label: "Tv" },
            { icon: "iot", label: "IoT" },
          ].map((item, i) => (
            <div className="tech-box" key={i}>
              <div className="icon-circle">
                <img src={`/images/${item.icon}.png`} alt={item.label} />
              </div>
              <div className="label-box">{item.label}</div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="projects-section">
        <div className="projects-header">
          <h4 className="projects-label">PROJECTS</h4>
          <h2 className="projects-title">
            Our Latest Incredible <br /> Client&apos;s Projects
          </h2>
          <p className="projects-description">
            There are many variations of passages of available but majority have suffered alteration
            in some form, by humour or randomised words which don&apos;t look even slightly believable.
          </p>
         <div className="projects-arrows">
          <button className="arrow-btn light">&#8594;</button>
          <button className="arrow-btn dark">&#8592;</button>
         </div>
       </div>

       <div className="project-cards">
            {[
          { image: 'project-1.png', title: 'Aurora Suite' },
          { image: 'project-2.png', title: 'SkyLedger' },
          { image: 'project-3.png', title: 'NeoCart' },
          { image: 'project-4.png', title: 'VividStream' },
        ].map((project, i) => (
       <div className="project-card" key={i}>
         <img src={`/images/${project.image}`} alt={project.title} />
         <div className="project-overlay">
          <h5>{project.title}</h5>
         </div>
         </div>
        ))}
        </div>
      </section>
      {/* nect */}
      <section className="team-section">
        <div className="team-header">
          <div className="team-texts">
           <h4 className="team-subheading">Team Members</h4>
           <h2 className="team-heading">Our Dedicated Team Members</h2>
          </div>
          <button className="all-members-btn">All Members</button>
        </div>

        <div className="team-cards">
            {[
             { image: 'team-1.png', name: 'Names' },
             { image: 'team-2.png', name: 'Names' },
             { image: 'team-3 3.jpeg', name: 'Names' },
            ].map((member, i) => (
         <div className="team-card" key={i}>
           <img src={`/images/${member.image}`} alt={member.name} className="team-img" />
           <div className="team-overlay">
             <h5>{member.name}</h5>
           </div>
         </div>
             ))}
       </div>
     </section>
     {/* next */}
     <section className="services-marquee">
        <div className="marquee-track">
          <span>Cyber Security</span>
          <span className="star">★</span>
          <span>IT Solution</span>
          <span className="star">★</span>
          <span>Technology</span>
          <span className="star">★</span>
          <span>Data Security</span>
          <span className="star">★</span>
          <span>Cloud Services</span>
          <span className="star">★</span>
          <span>Digital Strategy</span>
          <span className="star">★</span>
        </div>
     </section>
     {/* next */}
     <section className="consultation-section">
       <div className="circle left"></div>
       <div className="circle right"></div>

       <div className="consultation-content">
         <h2>Get A Free Consultation</h2>
         <p>Drop us a line! We are here to answer your questions 24/7</p>

         <form className="consultation-form">
            <input type="text" placeholder="Your Name*" />
            <input type="email" placeholder="Your Name*" />
            <input type="text" placeholder="Your Name*" />
            <br />
           <button type="submit">Free Consultancy</button>
         </form>
       </div>
     </section>
     <div className="brands-section">
       <h2 className="brands-heading">1k+ Brands Trust Us</h2>

       <div className="brands-bar">
         <div className="brand-logos">
           <img src="/images/image 45.png" alt="Meta" />
           <img src="/images/image 46.png" alt="Inc 5000" />
           <img src="/images/image 47.png" alt="Amazon Partner" />
           <img src="/images/image 48.png" alt="TikTok Partner" />
           <img src="/images/image 49.png" alt="Google Partner" />
           <img src="/images/image 50.png" alt="Snapchat" />
           <img src="/images/image 51.png" alt="Facebook Partner" />
           <img src="/images/image 52.png" alt="CNBC" />
           <img src="/images/image 53.png" alt="CNBC" />
         </div>
       </div>
     </div>
      <div className='spacer'></div>
     {/* next */}
     <section className="experience-section"> 
       <div className="experience-container"> 
        <div className="experience-left"> 
        <h1 className="experience-heading">
           we rock <br /> your digital <br /> experiences
        </h1> 
        <button className="cta-button">get to know us</button> 
        </div>


        <div className="experience-right">
           <div className="info-box">
           <div className="info-header">
          <h2>onesol is fast</h2>
          <span className="close-btn">✕</span>
        </div>
        <p className="info-description">
          we know the pain of traditional, development, trust us. At Onesol
          we&apos;re up to 10x faster than your current agency. Period.
        </p>

        <div className="accordion">
          <div className="accordion-item">
            <div className="accordion-title">
              Onesol will leave you breathless
              <span className="plus-icon">+</span>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-title">
              Onesol has got you covered.
              <span className="plus-icon">+</span>
            </div>
          </div>
          </div>
        </div>
       </div>
      </div>
     </section>
     {/* next */}
    <section className="cta-section">
      <div className="cta-content">
        <div className="cta-texts">
          <p className="cta-subtitle">We&apos;re here to help to grow your business.</p>
          <h2 className="cta-title">Looking for the Best IT Business Solutions?</h2>
        </div>
        <button className="cta-button">LEARN MORE</button>
      </div>

      {/* Decorative Circles */}
      <img src="/images/circle1.png" alt="circle1" className="circle circle1" />
      <img src="/images/circle2.png" alt="circle2" className="circle circle2" />
    </section>
    {/* next */}
    <footer className="footer">
      <div className="footer-gradient-overlay">
        <h1 className="footer-watermark">Onesol</h1>
      </div>

      <div className="footer-content">
        <div className="footer-column">
          <img src="/images/logo.png" alt="Logo" className="footer-logo" />
          <h2>Onesol</h2>
          <p>
            With years of hands-on expertise, ONESOL transforms ambitious ideas
            into powerful digital realities. From strategic branding to advanced
            tech solutions, we help businesses conquer new heights.
          </p>
          <div className="footer-social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Links</h3>
          <ul>
            <li>About Us</li>
            <li>Meet our Team</li>
            <li>Works & Media</li>
            <li>Our Projects</li>
            <li>Contacts</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Newsletter</h3>
          <p>Signup for our latest news & articles. No spam.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter address" />
            <button>→</button>
          </div>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <p>+971 50 9611550</p>
          <p>www.onesol.ae</p>
          <p>
            Business Center, Sharjah Publishing City Free Zone, Sharjah,
            United Arab Emirates
          </p>
          <button className="appointment-button">BOOK AN APPOINTMENT</button>
        </div>
      </div>

      <div className="footer-bottom">
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
        <span>©2025 Onesol</span>
        <span>All Rights Reserved</span>
      </div>
    </footer>
    </div>
  );
}
