'use client';

import { useState } from "react";
import React from "react";
import "../styles/experience.css";

const Experience = () => { return ( 
  <section className="experience-section"> 
    <div className="experience-container"> 
      <div className="experience-left"> 
        <h1 className="experience-heading">
           we rock <br /> your digital <br /> experiences
        </h1> 
        <button className="cta-button">get to know us</button> 
      </div>

{/* <aside className="exp-socialbar" id="expSocialBar">
      <a href="#">
        <img src="/images/instagram.png" alt="Instagram" />
      </a>
      <a href="#">
        <img src="/images/facebook.png" alt="Facebook" />
      </a>
      <a href="#">
        <img src="/images/linkedin.png" alt="LinkedIn" />
      </a>
      <a href="#">
        <img src="/images/twitter.png" alt="Twitter" />
      </a>
      <button
        className="close-bar"
        aria-label="hide social bar"
        onClick={() => {
          const bar = document.getElementById("expSocialBar");
          if (bar) bar.style.display = "none";
        }}
      >
        ×
      </button>
    </aside> */}

    <div className="experience-right">
      <div className="info-box">
        <div className="info-header">
          <h2>onesol is fast</h2>
          <span className="close-btn">✕</span>
        </div>
        <p className="info-description">
          we know the pain of traditional, development, trust us. At Onesol
          we're up to 10x faster than your current agency. Period.
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

); };

export default Experience;