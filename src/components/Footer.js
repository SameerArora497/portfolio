import '../css/Footer.css';
import React, { useState } from 'react';

const Footer = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`SMTP issues!`);
  };

  return (
    <footer id="contact" className="bg-dark text-white py-5">
      <div className="container footer-container">
        <div className="row">
          
          <div className="col-md-6">
            <h2 className="footer-logo">Sameer<span className="logo-highlight">Arora</span></h2>
            <p className="footer-description">
              I am an Android app developer and currently learning ReactJS for frontend development and Node.js for backend development. I am a fresher, eager to grow and work on challenging projects.
            </p>
            <p>
              <i className="bi bi-telephone"></i> +919997917910 <br />
              <i className="bi bi-envelope"></i> sameerarora497@gmail.com <br />
              <i className="bi bi-geo-alt"></i> Sri Ganganagar, Rajasthan, India
            </p>
          </div>
  
          <div className="col-md-6">
            <h2 className="footer-heading">Get in touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Write your message here"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-gradient">Submit Now</button>
            </form>
          </div>
        </div>

        <center className="mt-5">&copy; 2024 Sameer Arora. All rights reserved.</center>

      </div>
    </footer>
  );
  
};

export default Footer;
