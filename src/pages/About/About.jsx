import React from 'react';
import { motion } from 'framer-motion';
import { FaHistory, FaEye, FaRocket } from 'react-icons/fa';
import './About.css';

const About = () => (
  <div className="main-content">
    <section className="vibrant-about">
      <div className="about-bg-elements">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="about-header"
        >
          <h1 className="section-title">About E-CESA</h1>
          <p className="section-subtitle">
            🚀 Discover the story behind Mumbai's most vibrant tech community
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-card main-card"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="card-icon">
              <FaHistory />
            </div>
            <h3>Our Story</h3>
            <p>
              The Electronics & Computer Engineering Student Association (E-CESA) at KJSCE Vidyavihar 
              has been the beating heart of innovation since its inception. We are more than just a council - 
              we're a family of passionate engineers, creators, and dreamers who believe in the power of technology 
              to change the world.
            </p>
          </motion.div>

          <div className="about-grid">
            <motion.div 
              className="about-card mission-card"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="card-icon">
                
              </div>
              <h3>Our Mission</h3>
              <p>
                To empower students with cutting-edge technical knowledge, foster innovation, 
                and create a platform where creativity meets technology. We strive to bridge 
                the gap between theoretical learning and practical application.
              </p>
            </motion.div>

            <motion.div 
              className="about-card vision-card"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <div className="card-icon">
                <FaEye />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the leading student organization that nurtures the next generation of 
                engineers and innovators, creating lasting impact in the field of electronics 
                and computer engineering.
              </p>
            </motion.div>

            <motion.div 
              className="about-card impact-card"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <div className="card-icon">
                <FaRocket />
              </div>
              <h3>Our Impact</h3>
              <p>
                With over 30+ active members, 8+ successful events, and countless projects, 
                E-CESA continues to be the catalyst for technological advancement and 
                student empowerment at KJSCE.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About;
