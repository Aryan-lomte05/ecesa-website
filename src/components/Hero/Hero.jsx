// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaArrowRight, FaPlay } from 'react-icons/fa';
// import './Hero.css';

// const Hero = () => (
//   <section className="abstract-hero">
//     <div className="floating-shapes">
//       <div className="shape-red"></div>
//       <div className="shape-yellow"></div>
//       <div className="shape-green"></div>
//       <div className="shape-blue"></div>
//       <div className="shape-pink"></div>
//     </div>

//     <div className="hero-mesh"></div>

//     <div className="container hero-content">
//       <motion.div 
//         className="hero-text"
//         initial={{ opacity: 0, x: -100 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1, delay: 0.5 }}
//       >
//         <h1 className="funky-title">
//           Welcome to <br/>
//           <span className="rainbow-text">E-CESA</span><br/>
//           <span className="subtitle-text">KJSSE Vidyavihar</span>
//         </h1>
        
//         <p className="hero-description">
//           🚀 Electronics & Computer Engineering Student Association<br/>
//           💫 Where innovation meets creativity in the most vibrant tech community!
//         </p>

//         <div className="funky-buttons">
//           <motion.a 
//             href="#about" 
//             className="btn btn-funky"
//             whileHover={{ scale: 1.1, rotate: 5 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Explore Magic <FaArrowRight />
//           </motion.a>
          
//           <motion.a 
//             href="#events" 
//             className="btn btn-funky btn-secondary"
//             whileHover={{ scale: 1.1, rotate: -5 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <FaPlay /> Watch Fun
//           </motion.a>
//         </div>
//       </motion.div>

//       <motion.div 
//         className="hero-visual"
//         initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
//         animate={{ opacity: 1, scale: 1, rotate: 0 }}
//         transition={{ duration: 1.5, delay: 0.8 }}
//       >
//         <div className="abstract-card card-1">
//           <div className="card-glow"></div>
//           🎨 Creative Innovation
//         </div>
//         <div className="abstract-card card-2">
//           <div className="card-glow"></div>
//           ⚡ Tech Excellence
//         </div>
//         <div className="abstract-card card-3">
//           <div className="card-glow"></div>
//           🌟 Community Spirit
//         </div>
//       </motion.div>
//     </div>
//   </section>
// );

// export default Hero;
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import './Hero.css';

const Hero = () => (
  <section className="vibrant-hero">
    {/* Colorful Background Elements */}
    <div className="hero-bg-elements">
      <div className="bg-circle circle-1"></div>
      <div className="bg-circle circle-2"></div>
      <div className="bg-circle circle-3"></div>
      <div className="bg-circle circle-4"></div>
      <div className="bg-circle circle-5"></div>
    </div>

    <div className="container hero-container">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          Welcome to the Future
        </motion.h1>
        
        <motion.div 
          className="hero-brand"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <span className="brand-main">E-CESA</span>
          <span className="brand-desc">Electronics & Computer Engineering Student Association</span>
          <span className="brand-location">KJSSE Vidyavihar</span>
        </motion.div>

        <motion.p 
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          🚀 Join Mumbai's most vibrant tech community where innovation meets creativity! 
          Unleash your potential with cutting-edge projects, exciting events, and endless opportunities.
        </motion.p>

        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <a href="#about" className="btn btn-primary">
            <span>Explore More</span>
            <FaArrowRight />
          </a>
          <a href="#events" className="btn btn-secondary">
            <FaPlay />
            <span>Watch Demo</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.3, rotate: -45 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      >
        <div className="visual-card card-red">
          <div className="card-icon">🎨</div>
          <h3>Creative Innovation</h3>
          <p>Design tomorrow's solutions</p>
        </div>
        
        <div className="visual-card card-blue">
          <div className="card-icon">⚡</div>
          <h3>Tech Excellence</h3>
          <p>Master cutting-edge technology</p>
        </div>
        
        <div className="visual-card card-green">
          <div className="card-icon">🌟</div>
          <h3>Community Spirit</h3>
          <p>Build lasting connections</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
