import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUsers, FaExternalLinkAlt } from 'react-icons/fa';
import './Events.css';

const Events = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Events', color: '#ff6b6b' },
    { id: 'workshop', label: 'Workshops', color: '#4ecdc4' },
    { id: 'hackathon', label: 'Hackathons', color: '#45b7d1' },
    { id: 'seminar', label: 'Seminars', color: '#feca57' },
    { id: 'competition', label: 'Competitions', color: '#ff9ff3' },
    { id: 'cultural', label: 'Cultural', color: '#54a0ff' }
  ];

  const events = [
    {
      id: 1,
      title: "Tech Innovation Hackathon 2025",
      description: "48-hour coding marathon to build next-gen solutions for real-world problems. Join us for the ultimate challenge!",
      date: "2025-09-15",
      time: "9:00 AM",
      venue: "KJSCE Main Auditorium",
      category: "hackathon",
      image: "/assets/images/hackathon.jpg",
      registrationLink: "#",
      maxParticipants: 100,
      registeredParticipants: 75
    },
    {
      id: 2,
      title: "IoT & Robotics Workshop",
      description: "Hands-on workshop covering Arduino, Raspberry Pi, sensor integration, and building smart devices.",
      date: "2025-10-10",
      time: "2:00 PM",
      venue: "Electronics Lab",
      category: "workshop",
      image: "/assets/images/iot-workshop.jpg",
      registrationLink: "#",
      maxParticipants: 50,
      registeredParticipants: 30
    },
    {
      id: 3,
      title: "AI/ML Seminar Series",
      description: "Industry experts share insights on artificial intelligence, machine learning trends, and career opportunities.",
      date: "2025-11-05",
      time: "11:00 AM",
      venue: "Seminar Hall",
      category: "seminar",
      image: "/assets/images/ai-seminar.jpg",
      registrationLink: "#",
      maxParticipants: 200,
      registeredParticipants: 150
    },
    {
      id: 4,
      title: "Code Combat Competition",
      description: "Test your programming skills in this intense coding competition with exciting prizes and recognition.",
      date: "2025-12-01",
      time: "10:00 AM",
      venue: "Computer Lab",
      category: "competition",
      image: "/assets/images/coding-competition.jpg",
      registrationLink: "#",
      maxParticipants: 80,
      registeredParticipants: 45
    }
  ];

  const filteredEvents = activeCategory === 'all' 
    ? events 
    : events.filter(event => event.category === activeCategory);

  const getCategoryColor = (category) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : '#ff6b6b';
  };

  return (
    <div className="main-content">
      <section className="vibrant-events">
        <div className="events-bg-elements">
          <div className="bg-shape shape-1"></div>
          <div className="bg-shape shape-2"></div>
          <div className="bg-shape shape-3"></div>
          <div className="bg-wave"></div>
        </div>

        <div className="container">
          <motion.div
            className="events-header"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="section-title">Exciting Events 🎉</h1>
            <p className="section-subtitle">
              Join Mumbai's most vibrant tech events and expand your horizons!
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="category-filter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                style={{ '--category-color': category.color }}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Events Grid */}
          <div className="events-grid">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="event-card"
                style={{ '--event-color': getCategoryColor(event.category) }}
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  boxShadow: `0 20px 40px ${getCategoryColor(event.category)}30`
                }}
              >
                <div className="event-glow"></div>
                
                <div className="event-image">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='${getCategoryColor(event.category)}'/%3E%3Ctext x='150' y='100' text-anchor='middle' fill='white' font-size='16'%3E${event.title}%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                  <div className="event-category">{event.category}</div>
                </div>

                <div className="event-content">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                  
                  <div className="event-details">
                    <div className="event-detail">
                      <FaCalendarAlt />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="event-detail">
                      <FaClock />
                      <span>{event.time}</span>
                    </div>
                    <div className="event-detail">
                      <FaMapMarkerAlt />
                      <span>{event.venue}</span>
                    </div>
                    <div className="event-detail">
                      <FaUsers />
                      <span>{event.registeredParticipants}/{event.maxParticipants}</span>
                    </div>
                  </div>

                  <div className="event-progress">
                    <div 
                      className="progress-bar"
                      style={{ 
                        width: `${(event.registeredParticipants / event.maxParticipants) * 100}%`,
                        background: getCategoryColor(event.category)
                      }}
                    ></div>
                  </div>

                  <motion.a
                    href={event.registrationLink}
                    className="event-register-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Register Now <FaExternalLinkAlt />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
