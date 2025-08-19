import React from "react";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import teachersDayImg from "../../assets/images/teachersday.jpg";
import abhiyantrikiImg from "../../assets/images/abhiyantriki.jpg";
import agritechImg from "../../assets/images/agritech.png";
import escapeRoomImg from "../../assets/images/escaperoom.png";
import treasureHuntImg from "../../assets/images/treasurehunt.jpg";

import "./Events.css";

const events = [
  {
    date: "05 SEP",
    title: "Teachers Day",
    location: "B Auditorium",
    time: "10:00 AM – 1:00 PM",
    formLink: "https://docs.google.com/forms/d/1uG96EQlYdUqKbEdPFpFj4nghpzckQYkfPGJ8fRTvNsk/edit",
    description:
      "Celebrating our mentors with gratitude, fun activities, and performances.",
    color: "#ff3f81",
    image: teachersDayImg,
  },
  {
    date: "21 OCT",
    title: "Abhiyantriki",
    location: "Gargi Plaza",
    time: "9:00 AM – 5:00 PM",
    formLink: "https://docs.google.com/forms/d/1uG96EQlYdUqKbEdPFpFj4nghpzckQYkfPGJ8fRTvNsk/edit",
    description:
      "Annual technical festival showcasing innovation, creativity, and collaboration.",
    color: "#ffb400",
    image: abhiyantrikiImg,
  },
  {
    date: "16 JAN",
    title: "AgriTech Hackathon",
    location: "Quadrangle",
    time: "24 Hours",
    formLink: "https://docs.google.com/forms/d/1uG96EQlYdUqKbEdPFpFj4nghpzckQYkfPGJ8fRTvNsk/edit",
    description:
      "A flagship hackathon bringing together innovators, coders, and entrepreneurs to build impactful solutions in AgriTech.",
    color: "#ff7043",
    image: agritechImg,
  },
  {
    date: "10 FEB",
    title: "Escape Room",
    location: "Lab B407",
    time: "11:00 AM – 1:00 PM",
    formLink: "https://docs.google.com/forms/d/1uG96EQlYdUqKbEdPFpFj4nghpzckQYkfPGJ8fRTvNsk/edit",
    description:
      "A thrilling puzzle solving challenge where teams race against time to escape by cracking clues and codes.",
    color: "#2979ff",
    image: escapeRoomImg, 
  },
  {
    date: "15 MAR",
    title: "Treasure Hunt",
    location: "Somaiya Campus",
    time: "1:00 PM – 3:00 PM",
    formLink: "https://docs.google.com/forms/d/1uG96EQlYdUqKbEdPFpFj4nghpzckQYkfPGJ8fRTvNsk/edit",
    description:
      "An adventurous hunt across the campus where teams solve riddles and follow clues to find the hidden treasure.",
    color: "#00c853",
    image: treasureHuntImg,
  },
];




export default function Events() {
  return (
     <div className="main-content">
    <div className="events-container">
      {/* Funky SVG Bg */}
      <div className="funky-bg"></div>

      {/* Header */}
      <div className="events-header">
        
        <motion.h1
          className="events-heading"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Events
          <span className="sub-text">
            2025–26: Bigger, Louder, Crazier — Let’s Go!<hr>
            </hr>
            <hr />
            <hr /><hr /><hr /><hr /><hr /><hr />
          </span>
        </motion.h1>
      </div>

      {/* rope */}
      <motion.div
        className="events-rope"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Timeline Items */}
      {events.map((event, index) => (
        <motion.div
          key={index}
          className={`event-item ${index % 2 === 0 ? "left" : "right"}`}
          initial={{ opacity: 0, scale: 0.8, y: 80 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
            delay: index * 0.2,
          }}
        >
          {/* calendar */}
          <div
            className="event-date-calendar"
            style={{ backgroundColor: event.color }}
          >
            <div className="calendar-top">
              <span className="pin"></span>
              <span className="pin"></span>
            </div>
            <div className="calendar-date">{event.date}</div>
          </div>

          {/* event card */}
          <div className="event-card">
            <div className="event-image">
              <img src={event.image} alt={event.title} />
            </div>
            <div className="event-info">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div className="event-footer">
                <div className="event-meta">
                  <div className="event-location">
                    <FaMapMarkerAlt className="icon" />
                    <span>{event.location}</span>
                  </div>
                  <div className="event-time">
                    <FaClock className="icon" />
                    <span>{event.time}</span>
                  </div>
                </div>
                <a
                  href={event.formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="register-btn"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
  );
}
