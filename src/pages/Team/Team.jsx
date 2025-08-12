import React from 'react';

const teamMembers = [
  { id: 1, name: 'Aamir Arsiwala', role: 'General Secretary', photo: 'assets/images/Copy of WhatsApp Image 2024-08-08 at 22.33.04_e721bc67.jpg' },
  { id: 2, name: 'XYZ', role: 'JT Gen SEc', photo: '/assets/images/team2.jpg' },
  { id: 3, name: 'YZX', role: 'Technical Head', photo: '/assets/images/team3.jpg' },
];

const Team = () => (
  <div className="container" style={{ padding: '3rem 1rem' }}>
    <h1 className="section-title">Our Team</h1>
    <div style={{display:'flex',gap:'2rem', flexWrap:'wrap'}}>
      {teamMembers.map(member => (
        <div key={member.id} style={{flex:'1 0 200px', boxShadow:'var(--shadow-md)',borderRadius:'var(--border-radius)', padding:'1rem', textAlign:'center'}}>
          <img src={member.photo} alt={member.name} style={{width:'250px', borderRadius:'100%'}} />
          <h3>{member.name}</h3>
          <p style={{color:'var(--gray-600)', fontWeight:'600'}}>{member.role}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Team;
