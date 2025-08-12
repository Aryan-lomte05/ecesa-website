import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt 
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3 className="gradient-text">E-CESA</h3>
              <p>Electronics & Computer Engineering Student Association</p>
            </div>
            <p className="footer-description">
              Empowering the next generation of engineers through innovation, 
              collaboration, and excellence in technology.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <FaFacebook />
              </a>
              <a href="#" className="social-link">
                <FaTwitter />
              </a>
              <a href="#" className="social-link">
                <FaInstagram />
              </a>
              <a href="#" className="social-link">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>SVU Campus, Vidyavihar, Maharashtra 400077</span>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <span>ecesa@</span>
              </div>
              <div className="contact-item">
                <FaPhone />
                <span></span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Newsletter</h4>
            <p>Stay updated with our latest events and announcements.</p>
            <div className="newsletter">
              <input 
                type="email" 
                placeholder="Your email address"
                className="newsletter-input"
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 E-CESA, KJSSE. All rights reserved.</p>
          <p>Made with ❤️ by E-CESA Web Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
