// import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaUsers, FaTrophy, FaLightbulb, FaGraduationCap, FaMicrochip, FaBolt } from 'react-icons/fa';
import './Features.css';

const features = [
  { 
    icon: <FaCode />, 
    title: 'Code Warriors', 
    desc: 'Master programming languages and build amazing projects', 
    color: '#ff6b6b',
    bgColor: 'rgba(255, 107, 107, 0.1)'
  },
  { 
    icon: <FaRocket />, 
    title: 'Innovation Lab', 
    desc: 'Launch groundbreaking ideas into reality', 
    color: '#4ecdc4',
    bgColor: 'rgba(78, 205, 196, 0.1)'
  },
  { 
    icon: <FaUsers />, 
    title: 'Tech Community', 
    desc: 'Connect with passionate engineers and creators', 
    color: '#45b7d1',
    bgColor: 'rgba(69, 183, 209, 0.1)'
  },
  { 
    icon: <FaTrophy />, 
    title: 'Achievement Hub', 
    desc: 'Celebrate victories and push boundaries together', 
    color: '#feca57',
    bgColor: 'rgba(254, 202, 87, 0.1)'
  },
  { 
    icon: <FaMicrochip />, 
    title: 'Hardware Wizards', 
    desc: 'Design circuits and electronic masterpieces', 
    color: '#ff9ff3',
    bgColor: 'rgba(255, 159, 243, 0.1)'
  },
  { 
    icon: <FaBolt />, 
    title: 'Future Engineers', 
    desc: 'Shape tomorrow with cutting-edge technology', 
    color: '#54a0ff',
    bgColor: 'rgba(84, 160, 255, 0.1)'
  }
];

const Features = () => (
  <section className="enhanced-features">
    <div className="features-bg-patterns">
      <div className="pattern-circle pattern-1"></div>
      <div className="pattern-circle pattern-2"></div>
      <div className="pattern-circle pattern-3"></div>
      <div className="pattern-wave"></div>
    </div>

    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="features-header"
      >
        <h2 className="section-title">Why Join E-CESA?</h2>
        <p className="section-subtitle">
          🌟 Discover endless opportunities in Mumbai's most vibrant tech community! 
          Experience innovation, creativity, and excellence like never before.
        </p>
      </motion.div>

      <div className="vibrant-features-grid">
        {features.map(({ icon, title, desc, color, bgColor }, index) => (
          <motion.div
            key={index}
            className="vibrant-feature-card"
            initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05, 
              rotateY: 5,
              boxShadow: `0 20px 40px ${color}40`
            }}
            style={{ '--feature-color': color, '--feature-bg': bgColor }}
          >
            <div className="feature-glow"></div>
            <div className="feature-icon-wrapper">
              <div className="feature-icon">{icon}</div>
              <div className="icon-ripple"></div>
            </div>
            <h3 className="feature-title">{title}</h3>
            <p className="feature-description">{desc}</p>
            <div className="feature-border"></div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
