import React from 'react';
import Lottie from 'react-lottie-player';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../css/AboutMe.css';
import animationData from './lottieProfile.json';

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me-section py-5">
      <div className="container">
        <h2 className="section-title">About <span className="highlight">me</span></h2>
        <div className="row">
          {/* Profile Image */}
          <div className="col-md-4 text-center">
            <Lottie
              loop
              animationData={animationData} // The Lottie animation JSON file
              play
              style={{ width: 250, height: 250 }} // Adjust the size
            />
          </div>
  
          {/* About Me Text and Skills */}
          <div className="col-md-8">
            <p>
              I am an Android app developer and currently learning ReactJS for frontend and Node.js for backend development. 
              As a fresher, I am passionate about building apps and eager to work on challenging projects to grow my skills. 
              I bring enthusiasm, dedication, and a constant drive to improve with every project I undertake.
            </p>
  
            {/* Skills Progress Bars */}
            <div className="skills">
              <div className="skill">
                <h4>Android Development (Java/Kotlin)</h4>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped" style={{ width: '80%' }}></div>
                </div>
              </div>
  
              <div className="skill">
                <h4>React JS</h4>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped bg-warning" style={{ width: '70%' }}></div>
                </div>
              </div>
  
              <div className="skill">
                <h4>Node.js</h4>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped bg-info" style={{ width: '60%' }}></div>
                </div>
              </div>
  
              <div className="skill">
                <h4>JavaScript</h4>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped bg-success" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Stats Section */}
        <div className="row text-center stats-section mt-5">
          <div className="col-md-4">
            <h3 className="stat-number">Fresher</h3>
            <p className="stat-description">Experience Level</p>
          </div>
          <div className="col-md-4">
            <h3 className="stat-number">3+</h3>
            <p className="stat-description">Projects Completed</p>
          </div>
          <div className="col-md-4">
            <h3 className="stat-number">100%</h3>
            <p className="stat-description">Passion & Dedication</p>
          </div>
        </div>
      </div>
    </section>
  );
  
};

export default AboutMe;
