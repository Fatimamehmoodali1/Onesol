'use client';
import React from 'react';
import '../styles/trustedsection.css';

export default function TrustedSection() {
  return (
    <>
      {/* Top Background Section */}
      <section className="trusted-section">
        <div className="trusted-content">
          <h2>Trusted by Global <br /> & Local Brands</h2>
          <p>
            ONESOL is trusted by forward-thinking companies across UAE, Pakistan, and beyond to create impact at every touchpoint.
          </p>
          <div className="trusted-buttons">
            <button>Bold brands</button>
            <button>Creative agencies</button>
            <button>Enterprises</button>
          </div>
        </div>
      </section>

      {/* Services with Orange Strip */}
      <section className="services-choose-section">
        <div className="orange-bg-wrapper"></div>
        <div className="container">
          <div className="cards-container">
            <div className="service-card">
              <img src="/images/feature-1 1.jpeg" alt="UI/UX Icon" />
              <p>UI/UX Design Service</p>
            </div>
            <div className="service-card">
              <img src="/images/feature-2 1.png" alt="Business Icon" />
              <p>Business Consultation</p>
            </div>
            <div className="service-card">
              <img src="/images/feature-3 1.png" alt="Website Icon" />
              <p>Website Development</p>
            </div>
            <div className="service-card">
              <img src="/images/feature-4 1.png" alt="Support Icon" />
              <p>Support Management</p>
            </div>
            <div className="service-card">
              <img src="/images/feature-5 1.png" alt="Marketing Icon" />
              <p>Market Research</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
