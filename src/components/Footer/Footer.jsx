import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBolt,
  FaHeart,
  FaRocket,
  FaCode
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook />, url: "#", color: '#1877f2' },
    { icon: <FaTwitter />, url: "#", color: '#1da1f2' },
    { icon: <FaInstagram />, url: "#", color: '#e4405f' },
    { icon: <FaLinkedin />, url: "#", color: '#0077b5' }
  ];

  const quickLinks = [
    { path: '/', label: 'Home', color: '#ff6b6b' },
    { path: '/about', label: 'About', color: '#4ecdc4' },
    { path: '/events', label: 'Events', color: '#45b7d1' },
    { path: '/projects', label: 'Projects', color: '#96ceb4' },
    { path: '/team', label: 'Team', color: '#feca57' },
    { path: '/gallery', label: 'Gallery', color: '#ff9ff3' },
    { path: '/contact', label: 'Contact', color: '#54a0ff' }
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      text: "KJSCE Vidyavihar, Mumbai 400077",
      color: '#ff6b6b'
    },
    {
      icon: <FaEnvelope />,
      text: "ecesa@kjsce.edu.in",
      color: '#4ecdc4'
    },
    {
      icon: <FaPhone />,
      text: "+91 7558497556",
      color: '#feca57'
    }
  ];

  return (
    <footer className="vibrant-footer">
      {/* Background Elements */}
      <div className="footer-bg-elements">
        <div className="footer-shape shape-1"></div>
        <div className="footer-shape shape-2"></div>
        <div className="footer-shape shape-3"></div>
        <div className="footer-wave"></div>
      </div>

      <div className="container">
        <div className="footer-content">
          {/* Logo and Description Section */}
          <motion.div 
            className="footer-section footer-brand"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="footer-logo">
              <div className="logo-icon">
                <FaBolt />
              </div>
              <div className="logo-content">
                <span className="logo-main">E-CESA</span>
                <span className="logo-sub">Initiative Of</span>
                <span className="logo-institute">KJSCE Vidyavihar</span>
              </div>
            </div>
            
            <p className="footer-description">
              🚀 Empowering the next generation of engineers through innovation, 
              collaboration, and excellence in technology. Join Mumbai's most vibrant tech community!
            </p>

            {/* Social Links */}
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="social-link"
                  style={{ '--social-color': social.color }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="social-glow"></div>
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div 
            className="footer-section footer-links"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-nav-links">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.path}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    to={link.path} 
                    className="footer-nav-link"
                    style={{ '--link-color': link.color }}
                  >
                    <span className="link-indicator"></span>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div 
            className="footer-section footer-contact"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-title">Contact Info</h4>
            <div className="contact-info-list">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-info-item"
                  style={{ '--info-color': info.color }}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <div className="contact-icon">{info.icon}</div>
                  <span className="contact-text">{info.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div 
            className="footer-section footer-newsletter"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-title">Stay Connected 💌</h4>
            <p className="newsletter-description">
              Get the latest updates on events, workshops, and opportunities!
            </p>
            
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <div className="input-glow"></div>
              </div>
              <motion.button 
                type="submit" 
                className="newsletter-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe <FaRocket />
              </motion.button>
            </form>

            {/* Floating Icons */}
            <div className="floating-icons">
              <motion.div 
                className="floating-icon icon-1"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaCode />
              </motion.div>
              <motion.div 
                className="floating-icon icon-2"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <FaHeart />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; 2025 E-CESA, KJSCE Vidyavihar. All rights reserved.
            </p>
            <p className="made-with">
              Made with <FaHeart className="heart-icon" /> by E-CESA Web Team
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
