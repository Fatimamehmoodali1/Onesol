'use client';
import React from 'react';
import '../styles/hero.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="hero">
    {/* Decorative left triangle & circle */}
      <div className="hero-left-shapes">
        <Image src="/images/Polygon-4.png" alt="Small Triangle" width={20} height={20} className="left-triangle" />
        <Image src="/images/Ellipse-9.png" alt="Small Circle" width={12} height={12} className="left-circle" />
      </div>
       <div className="hero-left">
        <h1>
          ELEVATING <br />
          <span>Your BRAND</span> <br />
          BEYOND LIMITS
        </h1>
        <p>We design, build, and grow digital <br /> experiences that set you apart <br />in a global market.</p>
        <button className="hero-btn">Contact Us</button>
      </div> 
      <div 
      className="curve-text">Onesol ' friend</div>
     
      <div className="hero-shapes">
        <Image src="/images/Polygon-5.png" alt="Triangle 1" className="triangle1" width={100} height={100} />
        <Image src="/images/Polygon-2.png" alt="Triangle 2" className="triangle2" width={100} height={100} />
        <Image src="/images/Ellipse-3.png" alt="Right Round" className="round-right" width={200} height={200} />
        <Image src="/images/Ellipse-2.png" alt="Left Round" className="round-left" width={120} height={120} />
        <Image src="/images/curve.png" alt="Curve Bottom" className="curve-bottom" width={2603.456787109375} height={1070.617431640625} />
      </div>
      
      {/* Vertical Social Icons */}
      <div className="hero-icons">
        <a href="#"><Image src="/images/facebook.png" alt="Facebook" width={24} height={24} /></a>
        <a href="#"><Image src="/images/instagram.png" alt="Instagram" width={24} height={24} /></a>
        <a href="#"><Image src="/images/linkedin.png" alt="LinkedIn" width={24} height={24} /></a>
        <a href="#"><Image src="/images/twitter.png" alt="X" width={24} height={24} /></a>
      </div>
      {/* Bottom Right Corner Shapes */}
      <div className="hero-bottom-right-shapes">
        <Image src="/images/Ellipse-4.png" alt="Bottom Circle" width={30} height={30} className="bottom-circle" />
        <Image src="/images/rectangle-48.png" alt="Bottom Rectangle" width={60} height={20} className="bottom-rect" />
      </div>
    </section>
  );
};

export default Hero;