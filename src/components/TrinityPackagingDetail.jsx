import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectDetail.css';

// Import project images
import trinityHero from '../assets/projects/trinity-packaging.png';
// Import gallery images from trinity-packaging folder
import trinityImg1 from '../assets/projects/trinity-packaging/image1.png';
import trinityImg2 from '../assets/projects/trinity-packaging/image2.png';
import trinityImg3 from '../assets/projects/trinity-packaging/image3.png';
import trinityImg4 from '../assets/projects/trinity-packaging/image4.png';
import trinityImg5 from '../assets/projects/trinity-packaging/image5.png';
import trinityImg6 from '../assets/projects/trinity-packaging/image6.png';
import trinityImg7 from '../assets/projects/trinity-packaging/image7.png';
import trinityImg8 from '../assets/projects/trinity-packaging/image8.png';
import trinityImg9 from '../assets/projects/trinity-packaging/image9.png';
import trinityImg10 from '../assets/projects/trinity-packaging/image10.png';
import trinityImg11 from '../assets/projects/trinity-packaging/image11.png';
import trinityImg12 from '../assets/projects/trinity-packaging/image12.png';
import trinityImg13 from '../assets/projects/trinity-packaging/image13.png';
import trinityImg14 from '../assets/projects/trinity-packaging/image14.png';

const TrinityPackagingDetail = () => {
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Project data
  const projectData = {
    companyName: 'VYUHX TECHNOLOGIES',
    title: 'Trinity Packaging',
    description: 'Trinity Packaging represents a comprehensive digital transformation for a growing corrugation and packaging manufacturing company. This professional B2B platform was meticulously designed to showcase their extensive product catalog of corrugated boxes and duplex cartons while establishing their credibility in the industrial packaging sector. The website serves as a powerful business tool, featuring detailed product specifications, manufacturing capabilities, and infrastructure highlights that demonstrate their operational excellence. With strategically placed inquiry forms, comprehensive service descriptions, and visual showcases of their facility and machinery, the platform effectively converts visitors into qualified business leads. The clean, professional design reflects the company\'s commitment to quality and reliability, making it easy for potential clients to understand their offerings and initiate business relationships.',
    heroImage: trinityHero,
    gallery: [
      trinityImg1,
      trinityImg2,
      trinityImg3,
      trinityImg4,
      trinityImg5,
      trinityImg6,
      trinityImg7,
      trinityImg8,
      trinityImg9,
      trinityImg10,
      trinityImg11,
      trinityImg12,
      trinityImg13,
      trinityImg14
    ],
    client: 'Trinity Packaging',
    industry: 'Manufacturing & Packaging',
    location: 'Vilholi, Nashik',
    duration: '4 weeks',
    completed: 'March 2026',
    deployment: 'https://trinitypkg.com/',
    techStack: {
      frontend: [
        { name: 'React', icon: '⚛️' },
        { name: 'TypeScript', icon: '📘' },
        { name: 'Tailwind CSS', icon: '🎨' }
      ],
      backend: [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Express.js', icon: '⚡' }
      ],
      database: [
        { name: 'MongoDB', icon: '🍃' }
      ]
    },
    features: [
      {
        icon: '📦',
        title: 'Comprehensive Product Catalog',
        description: 'Detailed showcase of 12+ packaging products including corrugated boxes, duplex cartons, and custom solutions with specifications and use cases'
      },
      {
        icon: '🏭',
        title: 'Infrastructure Showcase',
        description: 'Visual presentation of manufacturing facility, machinery, and operational capabilities highlighting 10+ modern machines and skilled workforce'
      },
      {
        icon: '📋',
        title: 'Business Inquiry System',
        description: 'Integrated contact forms and inquiry management system enabling seamless communication between potential clients and sales team'
      },
      {
        icon: '🎯',
        title: 'Service Portfolio Display',
        description: 'Comprehensive breakdown of corrugated packaging services, duplex carton offerings, and value-added services with clear categorization'
      }
    ],
    impact: [
      {
        icon: '✓',
        text: '150+ Business Inquiries: Significant increase in qualified B2B leads through strategic contact forms and clear service presentation'
      },
      {
        icon: '✓',
        text: '70% Faster Response Time: Streamlined inquiry system enabling quick response to potential clients and improved conversion rates'
      },
      {
        icon: '✓',
        text: '3x Digital Presence: Enhanced online visibility establishing Trinity Packaging as a professional packaging solutions provider in the region'
      }
    ]
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === projectData.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? projectData.gallery.length - 1 : prev - 1
    );
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setCurrentImageIndex((prev) => 
        prev === projectData.gallery.length - 1 ? 0 : prev + 1
      );
      if (e.key === 'ArrowLeft') setCurrentImageIndex((prev) => 
        prev === 0 ? projectData.gallery.length - 1 : prev - 1
      );
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, projectData.gallery.length]);

  return (
    <div className="project-detail-page">
      {/* Header Section */}
      <div className="detail-header-section">
        <div className="detail-header-wrapper">
          <button className="detail-back-button" onClick={() => navigate('/projects')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="detail-header-content">
            <h1 className="detail-company-title">VYUHX TECHNOLOGIES</h1>
            <h2 className="detail-project-name">{projectData.title}</h2>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="detail-main-content">
        <div className="detail-content-wrapper">
          
          {/* Compact Gallery Section */}
          <div className="compact-gallery-section">
            {/* Main Preview */}
            <div className="main-preview" onClick={() => openLightbox(0)}>
              <img src={projectData.heroImage} alt={projectData.title} />
              <div className="preview-overlay">
                <span>Click to view gallery</span>
              </div>
            </div>

            {/* Small Thumbnails Row */}
            <div className="thumbnails-row">
              {projectData.gallery.slice(0, 4).map((img, index) => (
                <div 
                  key={index} 
                  className="small-thumb"
                  onClick={() => openLightbox(index)}
                >
                  <img src={img} alt={`Preview ${index + 1}`} />
                </div>
              ))}
              {projectData.gallery.length > 4 && (
                <div 
                  className="small-thumb view-all-thumb"
                  onClick={() => openLightbox(4)}
                >
                  <img src={projectData.gallery[4]} alt="View All" />
                  <div className="view-all-overlay">
                    <span>View All ({projectData.gallery.length})</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="detail-desc-card">
            <p>{projectData.description}</p>
          </div>

          {/* Project Details */}
          <div className="detail-info-card">
            <h2 className="card-section-title-new">Project Details</h2>
            <div className="info-grid-new">
              <div className="info-item-new">
                <span className="info-label-new">Client</span>
                <span className="info-value-new">{projectData.client}</span>
              </div>
              <div className="info-item-new">
                <span className="info-label-new">Industry</span>
                <span className="info-value-new">{projectData.industry}</span>
              </div>
              <div className="info-item-new">
                <span className="info-label-new">Location</span>
                <span className="info-value-new">{projectData.location}</span>
              </div>
              <div className="info-item-new">
                <span className="info-label-new">Duration</span>
                <span className="info-value-new">{projectData.duration}</span>
              </div>
              <div className="info-item-new">
                <span className="info-label-new">Completed</span>
                <span className="info-value-new">{projectData.completed}</span>
              </div>
              <div className="info-item-new full-width">
                <span className="info-label-new">Deployment</span>
                <a href={projectData.deployment} target="_blank" rel="noopener noreferrer" className="info-link-url-new">
                  {projectData.deployment}
                </a>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="detail-tech-card-new">
            <h2 className="card-main-title-new">Technology Stack</h2>
            
            <div className="tech-category-section">
              <h3 className="tech-category-title">FRONTEND</h3>
              <div className="tech-items-grid">
                {projectData.techStack.frontend.map((tech, i) => (
                  <div key={i} className="tech-card-item">
                    <span className="tech-card-icon">{tech.icon}</span>
                    <span className="tech-card-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tech-category-section">
              <h3 className="tech-category-title">BACKEND</h3>
              <div className="tech-items-grid">
                {projectData.techStack.backend.map((tech, i) => (
                  <div key={i} className="tech-card-item">
                    <span className="tech-card-icon">{tech.icon}</span>
                    <span className="tech-card-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tech-category-section">
              <h3 className="tech-category-title">DATABASE</h3>
              <div className="tech-items-grid">
                {projectData.techStack.database.map((tech, i) => (
                  <div key={i} className="tech-card-item">
                    <span className="tech-card-icon">{tech.icon}</span>
                    <span className="tech-card-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features & Impact */}
          <div className="features-impact-wrapper">
            <div className="features-section">
              <h2 className="card-main-title-new">Project Features</h2>
              <div className="features-list">
                {projectData.features.map((feature, i) => (
                  <div key={i} className="feature-item">
                    <div className="feature-icon">{feature.icon}</div>
                    <div className="feature-content">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="impact-section">
              <h2 className="card-main-title-new">Project Impact</h2>
              <div className="impact-list">
                {projectData.impact.map((item, i) => (
                  <div key={i} className="impact-item">
                    <div className="impact-icon">{item.icon}</div>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="lightbox-fullscreen" onClick={closeLightbox}>
          <button className="lb-close" onClick={closeLightbox}>×</button>
          <button className="lb-prev" onClick={prevImage}>‹</button>
          <button className="lb-next" onClick={nextImage}>›</button>
          
          <div className="lb-content-wrapper" onClick={(e) => e.stopPropagation()}>
            <img 
              src={projectData.gallery[currentImageIndex]} 
              alt={`${projectData.title} ${currentImageIndex + 1}`}
              className="lb-image"
            />
            <div className="lb-counter">
              {currentImageIndex + 1} / {projectData.gallery.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrinityPackagingDetail;