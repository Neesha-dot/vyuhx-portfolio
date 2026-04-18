import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

// Import project images from assets folder
// Store your images in: src/assets/projects/
import cafeTwentyTwentyImg from '../assets/projects/cafe 2020.png';
import bombRollsBowlsImg from '../assets/projects/bombrollsbowls1.png';
import sjInteriorsImg from '../assets/projects/sj interiors1.png';
import trinityPackagingImg from '../assets/projects/trinity-packaging.png';

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 'cafe-twenty-twenty',
      title: 'Cafe Twenty Twenty',
      category: 'Website Development',
      description: 'Where coffee meets comfort. Handcrafted coffee and calm ambiance welcome you every day with modern design and seamless online ordering.',
      thumbnail: cafeTwentyTwentyImg,
      tags: ['React', 'Node.js', 'Online Ordering', 'Restaurant']
    },
    {
      id: 'bomb-rolls-bowls',
      title: 'Bomb Rolls and Bowls',
      category: 'Website Development',
      description: 'Where every bite is a flavor bomb waiting to detonate! Vibrant menu showcase with stunning food photography and easy navigation.',
      thumbnail: bombRollsBowlsImg,
      tags: ['React', 'Menu Gallery', 'Food & Beverage', 'Modern Design']
    },
    {
      id: 'sj-interior',
      title: 'SJ Interior',
      category: 'Website Development',
      description: 'Elegant portfolio showcasing premium interior design projects with immersive visual experiences and seamless navigation.',
      thumbnail: sjInteriorsImg,
      tags: ['React', 'GSAP', 'Portfolio', 'Interior Design']
    },
    {
      id: 'trinity-packaging',
      title: 'Trinity Packaging',
      category: 'Website Development',
      description: 'Professional manufacturing website for corrugated boxes and duplex cartons with comprehensive product showcase and business inquiry system.',
      thumbnail: trinityPackagingImg,
      tags: ['React', 'Manufacturing', 'B2B', 'Product Showcase']
    }
  ];

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <div className="projects-page">
      {/* Header with same background as services */}
      <div className="projects-header">
        <div className="header-wrapper">
          <button className="back-button" onClick={() => navigate('/')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="header-content">
            <h1 className="projects-company-title">VYUHX TECHNOLOGIES</h1>
            <h2 className="projects-section-title">Website Development</h2>
            <p className="projects-tagline">Explore our portfolio of innovative web solutions</p>
          </div>
        </div>
      </div>

      {/* Projects Content Section */}
      <div className="projects-content-section">
        {/* Animated Background - matching Hero section */}
        <div className="projects-background">
          {/* Gradient Orbs */}
          <div className="unified-orb orb-top-right"></div>
          <div className="unified-orb orb-bottom-left"></div>
          <div className="unified-orb orb-center"></div>

          {/* Floating Particles */}
          <div className="unified-particles">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="unified-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 16}s`,
                  animationDuration: `${12 + Math.random() * 8}s`
                }}
              />
            ))}
          </div>

          {/* Animated Grid */}
          <div className="unified-grid">
            {[...Array(4)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="unified-grid-line grid-horizontal"
                style={{
                  top: `${(i + 1) * 20}%`,
                  animationDelay: `${i * 0.3}s`
                }}
              />
            ))}
            {[...Array(5)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="unified-grid-line grid-vertical"
                style={{
                  left: `${(i + 1) * 16.66}%`,
                  animationDelay: `${i * 0.3}s`
                }}
              />
            ))}
          </div>

          {/* Tech Nodes */}
          <div className="unified-tech-nodes">
            {[
              { top: '15%', left: '10%', delay: '0s' },
              { top: '25%', right: '15%', delay: '2s' },
              { bottom: '20%', left: '12%', delay: '4s' },
              { bottom: '30%', right: '10%', delay: '6s' },
              { top: '50%', left: '8%', delay: '8s' },
              { top: '60%', right: '12%', delay: '10s' }
            ].map((pos, i) => (
              <div
                key={i}
                className="unified-tech-node"
                style={{
                  ...pos,
                  animationDelay: pos.delay
                }}
              />
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-container">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="project-card"
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => handleProjectClick(project.id)}
              >
                {/* Project Image */}
                <div className="project-thumbnail-wrapper">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <button className="view-details-btn" onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project.id);
                    }}>
                      View Details
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;