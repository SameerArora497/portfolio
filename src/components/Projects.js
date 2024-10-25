import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../css/Projects.css';
import portfolioImage from '../images/portfolio.png'
import darkpaperImage from '../images/darkpaper.png'

const Projects = () => {
  return (
    <section id="portfolio" className="projects-section py-5">
      <div className="container">
        <h2 className="section-title">Latest <span className="highlight">Projects</span></h2>
        <div className="row">
          {/* Project 1 - Flutter Weather Forecast App */}
          <div className="col-md-4 mb-4">
            <div className="project-card">
              <img
                src={portfolioImage}
                alt="Flutter Weather Forecast App"
                className="project-img"
              />
              <h5 className="project-title">Weather Forecast App (Flutter)</h5>
              <p className="project-description">
                A Flutter-based mobile app that provides real-time weather forecasts with a simple, clean UI.
              </p>
            </div>
          </div>
  
          {/* Project 2 - Flutter Wallpaper App */}
          <div className="col-md-4 mb-4">
            <div className="project-card">
              <img
                src={darkpaperImage}
                alt="Flutter Wallpaper App"
                className="project-img"
              />
              <h5 className="project-title">Wallpaper App (Flutter)</h5>
              <p className="project-description">
                A Flutter app that allows users to browse and set high-quality wallpapers, with smooth UI and image caching.
              </p>
            </div>
          </div>
  
          {/* Project 3 - ReactJS Portfolio Website */}
          <div className="col-md-4 mb-4">
            <div className="project-card">
              <img
                src={portfolioImage}
                alt="ReactJS Portfolio Website"
                className="project-img"
              />
              <h5 className="project-title">Portfolio Website (ReactJS)</h5>
              <p className="project-description">
                A personal portfolio website built using ReactJS to showcase my latest projects, including responsive design and smooth navigation.
              </p>
            </div>
          </div>
  
          {/* Add more projects as needed */}
        </div>
      </div>
    </section>
  );
  
};

export default Projects;
