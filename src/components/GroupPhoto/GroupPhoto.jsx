import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaUsers, FaHeart, FaStar } from 'react-icons/fa';
import './GroupPhoto.css';

const GroupPhoto = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  const rotate = useTransform(scrollYProgress, [0.7, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0.75, 0.9], [0.5, 1]);

  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current) {
        const componentTop = componentRef.current.offsetTop;
        const componentHeight = componentRef.current.offsetHeight;
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        // Trigger when component is 70% visible
        const triggerPoint = componentTop + componentHeight * 0.3;
        
        if (scrollTop + windowHeight >= triggerPoint) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const floatingElements = [
    { icon: <FaUsers />, delay: 0.2, color: '#ff6b6b' },
    { icon: <FaHeart />, delay: 0.4, color: '#4ecdc4' },
    { icon: <FaStar />, delay: 0.6, color: '#feca57' },
    { icon: <FaStar />, delay: 0.8, color: '#45b7d1' },
    { icon: <FaHeart />, delay: 1.0, color: '#ff9ff3' },
  ];

  return (
    <motion.section 
      ref={componentRef}
      className="group-photo-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="photo-bg-effects">
        <div className="bg-gradient-1"></div>
        <div className="bg-gradient-2"></div>
        <div className="bg-gradient-3"></div>
      </div>

      <div className="container">
        <motion.div
          className="photo-content"
          initial={{ y: 100, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <motion.h2 
            className="photo-title"
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Meet Our Amazing Team! 🌟
          </motion.h2>
          
          <motion.p 
            className="photo-subtitle"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            The brilliant minds behind E-CESA's success
          </motion.p>

          <motion.div 
            className="photo-frame"
            style={{ rotate, scale }}
            initial={{ rotateY: 180, opacity: 0 }}
            animate={isVisible ? { rotateY: 0, opacity: 1 } : { rotateY: 180, opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
            <div className="photo-glow"></div>
            <img 
              src="/assets/images/council-group.jpg" 
              alt="E-CESA Council Team" 
              className="council-photo"
              onError={(e) => {
                // Fallback if image doesn't load
                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='350' viewBox='0 0 500 350'%3E%3Crect width='500' height='350' fill='%23ff6b6b'/%3E%3Ctext x='250' y='175' text-anchor='middle' fill='white' font-size='24' font-family='Arial'%3EE-CESA Team Photo%3C/text%3E%3C/svg%3E";
              }}
            />
            <div className="photo-overlay">
              <div className="overlay-text">
                <h3>E-CESA Council 2024-25</h3>
                <p>Together We Innovate 🚀</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Elements */}
          <div className="floating-elements">
            {floatingElements.map((element, index) => (
              <motion.div
                key={index}
                className="floating-element"
                style={{ '--element-color': element.color }}
                initial={{ scale: 0, opacity: 0 }}
                animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: element.delay,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 2
                }}
              >
                {element.icon}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GroupPhoto;
