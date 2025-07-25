import React from 'react';
import '../styles/projects.css';

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-inner">
        <section className="project-section">
          <div className="subheading">Our Completed Projects</div>
          <h2 className="main-heading">
            Improve & Enhance Our Tech <br /> Projects
          </h2>
          <p className="description">
            There are many variations of passages of available text but majority have suffered alteration in some form, by humour or randomised words which don't look even slightly believable.
          </p>
        </section>

        {/* ── 4 thumbnail cards */}
        <div className="proj-cards">
          <figure className="proj-card">
            <img src="/images/project1.png" alt="Tech Solutions" />
            <figcaption>Tech Solutions</figcaption>
          </figure>

          <figure className="proj-card">
            <img src="/images/project2.png" alt="Smart Visions" />
            <figcaption>Smart Visions</figcaption>
          </figure>

          <figure className="proj-card">
            <img src="/images/project3.png" alt="Platform Integration" />
            <figcaption>Platform Integration</figcaption>
          </figure>

          <figure className="proj-card">
            <img src="/images/project4.png" alt="Web Development" />
            <figcaption>Web Development</figcaption>
          </figure>
        </div>
      </div>

      {/* ── brand strip */}
      <div className="brands-section">
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
           <img src="/images/image 54.png" alt="CNBC" />
         </div>
       </div>
     </div>
      <div className='spacer'></div>
    </section>

  );
};

export default Projects;