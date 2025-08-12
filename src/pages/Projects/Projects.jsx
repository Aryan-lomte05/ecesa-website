import React from 'react';

const projects = [
  { id: 1, title: 'Smart Home Automation', description: 'IoT based home automation project.' },
  { id: 2, title: 'Drone Navigation System', description: 'Autonomous drone control system.' },
];

const Projects = () => (
  <div className="container" style={{ padding: '3rem 1rem' }}>
    <h1 className="section-title">Projects</h1>
    {projects.map(proj => (
      <div key={proj.id} style={{ marginBottom: '1.5rem', padding: '1rem', boxShadow: 'var(--shadow-md)', borderRadius: 'var(--border-radius)' }}>
        <h3>{proj.title}</h3>
        <p>{proj.description}</p>
      </div>
    ))}
  </div>
);

export default Projects;
