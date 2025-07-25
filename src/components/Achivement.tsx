"use client";

import React from 'react';
import '../styles/achivement.css';

const Achivement = () => {
  return (
    <section className="achievements">
      <div className="achieve-left">
        <h4>Achievements</h4>
        <h2>
          SOME NUMBER OF<br />OUR ACHIEVEMENTS
        </h2>
        <p>
          With over 10 years of experience, 200+ successful projects, and a 95% client satisfaction rate, our numbers speak for themselves.
          We turn ideas into results and build lasting digital success stories.
        </p>
        <button className="cta-btn">GeT Started →</button>
      </div>

      {/* <div className="achieve-right">
        <div className="achieve-box">
          <div className="circle-hover">
            <img src="/images/icon2.png" alt="Projects Completed" />
          </div>
          <span>8,550 Projects Completed</span>
        </div>

        <div className="achieve-box">
          <div className="circle-hover">
            <img src="/images/icon1.png" alt="Satisfied Clients" />
          </div>
          <span>3,850 Satisfied Clients</span>
        </div>

        <div className="achieve-box">
          <div className="circle-hover">
            <img src="/images/icon3.png" alt="Team Lead" />
          </div>
          <span>90+ Team lead</span>
        </div>

        <div className="achieve-box">
          <div className="circle-hover">
            <img src="/images/icon4.png" alt="Award Winning" />
          </div>
          <span>80+ Award winning</span>
        </div>
      </div> */}
  <div className="achievements-grid">
    <div className="achievement-box">
      <img src="/images/icon2.png" alt="Projects Completed" />
      <h4>8,550</h4>
      <p>Projects Completed</p>
    </div>
    <div className="achievement-box highlight">
      <img src="/images/icon1.png" alt="Satisfied Clients" />
      <h4>3,850</h4>
      <p>Satisfied Clients</p>
    </div>
    <div className="achievement-box">
      <img src="/images/icon3.png" alt="Team Lead" />
      <h4>90+</h4>
      <p>Team Lead</p>
    </div>
    <div className="achievement-box">
      <img src="/images/icon4.png" alt="Award Winning" />
      <h4>80+</h4>
      <p>Award Winning</p>
    </div>
  </div>
    </section>
  );
};

export default Achivement;