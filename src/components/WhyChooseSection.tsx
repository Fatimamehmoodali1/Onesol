'use client';
import React from 'react';
import '../styles/whychoose.css';

const WhyChooseSection = () => {
  return (
    <section className="why-choose-section">
      <div className="container">
        <p className="what-we-offer">What We OFFER</p>
        <h2 className="choose-heading">WHY YOU SHOULD CHOOSE US</h2>
        <p className="choose-description">
          At Onesol, we combine creativity, technology, and strategy to deliver impactful digital solutions
          that grow your business. We&apos;re more than a service provider—we&apos;re your reliable partner
          dedicated to your success.
        </p>

        <div className="why-cards">
          {/* Card 1 */}
          <div className="why-card">
            <div className="card-image">
              <img src="/images/choose-1.png" alt="Service 1" />
            </div>
            <div className="icon-wrapper">
              <img src="/images/icon-1.png" alt="Icon 1" />
            </div>
            <p className="card-text">Perfect solutions that business demands</p>
          </div>

          {/* Card 2 */}
          <div className="why-card">
            <div className="card-image">
              <img src="/images/choose-2.png" alt="Service 2" />
            </div>
            <div className="icon-wrapper">
              <img src="/images/icon-2.png" alt="Icon 2" />
            </div>
            <p className="card-text">We Provide Powerful Product Strategy</p>
          </div>

          {/* Card 3 */}
          <div className="why-card">
            <div className="card-image">
              <img src="/images/choose-1.png" alt="Service 3" />
            </div>
            <div className="icon-wrapper">
              <img src="/images/icon-3.png" alt="Icon 3" />
            </div>
            <p className="card-text">Help your business grow worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
