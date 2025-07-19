'use client';
import React from 'react';
import '../styles/blog.css';

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="container">
        <p className="blog-subtitle">NEWS AND ARTICLES</p>
        <h2 className="blog-title">OUR LATEST BLOG POSTS</h2>
        <p className="blog-description">
          Stay updated with the latest trends, insights, and success stories from the world of
          digital innovation. Explore how ONESOL is shaping the future with technology, creative
          strategies, and impactful solutions.
        </p>

        <div className="blog-cards">
          <div className="blog-card">
            <img src="/images/blog1.png" alt="Digital Pulse" />
            <div className="blog-card-title">Digital Pulse</div>
          </div>
          <div className="blog-card">
            <img src="/images/blog2.png" alt="Innovation Journal" />
            <div className="blog-card-title">Innovation Journal</div>
          </div>
          <div className="blog-card">
            <img src="/images/blog3.png" alt="ONESOL Insights" />
            <div className="blog-card-title">ONESOL Insights</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;